provider "aws" {
  region = var.region
}

data "aws_caller_identity" "current" {}

data "aws_vpc" "default" {
  default = true
}

data "aws_subnets" "all" {
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.default.id]
  }
}

locals {
  account_id = data.aws_caller_identity.current.account_id
  image_uri  = "${local.account_id}.dkr.ecr.${var.region}.amazonaws.com/${var.ecr_repository_name}:${var.image_tag}"
}

# --- Security Groups ---

resource "aws_security_group" "alb" {
  name        = "gamex-alb"
  description = "ALB for Gamex"
  vpc_id      = data.aws_vpc.default.id
}

resource "aws_vpc_security_group_ingress_rule" "alb_http" {
  security_group_id = aws_security_group.alb.id
  cidr_ipv4         = "0.0.0.0/0"
  from_port         = 80
  to_port           = 80
  ip_protocol       = "tcp"
}

resource "aws_vpc_security_group_egress_rule" "alb_egress" {
  security_group_id = aws_security_group.alb.id
  cidr_ipv4         = "0.0.0.0/0"
  ip_protocol       = "-1"
}

resource "aws_security_group" "ecs_tasks" {
  name        = "gamex-ecs-tasks"
  description = "SG for Gamex ECS tasks"
  vpc_id      = data.aws_vpc.default.id
}

resource "aws_vpc_security_group_ingress_rule" "ecs_from_alb" {
  security_group_id            = aws_security_group.ecs_tasks.id
  referenced_security_group_id = aws_security_group.alb.id
  from_port                    = 3000
  to_port                      = 3000
  ip_protocol                  = "tcp"
}

resource "aws_vpc_security_group_egress_rule" "ecs_egress" {
  security_group_id = aws_security_group.ecs_tasks.id
  cidr_ipv4         = "0.0.0.0/0"
  ip_protocol       = "-1"
}

resource "aws_vpc_security_group_ingress_rule" "rds_from_ecs" {
  count = var.rds_security_group_id != "" ? 1 : 0

  security_group_id            = var.rds_security_group_id
  referenced_security_group_id = aws_security_group.ecs_tasks.id
  from_port                    = 5432
  to_port                      = 5432
  ip_protocol                  = "tcp"
}

# --- IAM ---

resource "aws_iam_role" "ecs_execution" {
  name = "gamex-ecs-execution"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "Allow"
      Principal = { Service = "ecs-tasks.amazonaws.com" }
      Action    = "sts:AssumeRole"
    }]
  })
}

resource "aws_iam_role_policy_attachment" "ecs_execution_managed" {
  role       = aws_iam_role.ecs_execution.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

resource "aws_iam_role" "ecs_task" {
  name = "gamex-ecs-task"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "Allow"
      Principal = { Service = "ecs-tasks.amazonaws.com" }
      Action    = "sts:AssumeRole"
    }]
  })
}

resource "aws_iam_role_policy" "ecs_task_ecr" {
  role = aws_iam_role.ecs_task.name
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "ecr:GetDownloadUrlForLayer",
          "ecr:BatchGetImage",
          "ecr:BatchCheckLayerAvailability",
        ]
        Resource = "*"
      },
      {
        Effect = "Allow"
        Action = ["ecr:GetAuthorizationToken"]
        Resource = "*"
      },
    ]
  })
}

resource "aws_iam_role_policy" "ecs_task_rds" {
  role = aws_iam_role.ecs_task.name
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Action = ["rds-db:connect"]
      Resource = "arn:aws:rds-db:${var.region}:${local.account_id}:dbuser:*/${var.rds_user}"
    }]
  })
}

# --- ECS ---

resource "aws_ecs_cluster" "gamex" {
  name = "gamex"
}

resource "aws_ecs_task_definition" "gamex" {
  family                   = "gamex"
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = 512
  memory                   = 1024
  execution_role_arn       = aws_iam_role.ecs_execution.arn
  task_role_arn            = aws_iam_role.ecs_task.arn

  container_definitions = jsonencode([
    {
      name      = "gamex"
      image     = local.image_uri
      essential = true
      portMappings = [{
        containerPort = 3000
        protocol      = "tcp"
      }]
      environment = [
        { name = "NODE_ENV",     value = "production" },
        { name = "AWS_REGION",   value = var.region },
        { name = "AUTH_URL",     value = "http://${aws_lb.gamex.dns_name}" },
        { name = "AUTH_SECRET",  value = var.auth_secret },
        { name = "RDS_HOST",     value = var.rds_host },
        { name = "RDS_PORT",     value = tostring(var.rds_port) },
        { name = "RDS_USER",     value = var.rds_user },
        { name = "RDS_DATABASE", value = var.rds_database },
      ]
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          "awslogs-group"         = "/ecs/gamex"
          "awslogs-region"        = var.region
          "awslogs-stream-prefix" = "gamex"
        }
      }
    }
  ])

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_ecs_service" "gamex" {
  name            = "gamex"
  cluster         = aws_ecs_cluster.gamex.id
  task_definition = aws_ecs_task_definition.gamex.arn
  desired_count   = 1
  launch_type     = "FARGATE"
  force_new_deployment = true

  network_configuration {
    subnets          = data.aws_subnets.all.ids
    security_groups  = [aws_security_group.ecs_tasks.id]
    assign_public_ip = true
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.gamex.arn
    container_name   = "gamex"
    container_port   = 3000
  }

  depends_on = [aws_lb_listener.gamex]

  lifecycle {
    ignore_changes = [desired_count]
  }
}

# --- ALB ---

resource "aws_lb" "gamex" {
  name               = "gamex"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.alb.id]
  subnets            = data.aws_subnets.all.ids
}

resource "aws_lb_target_group" "gamex" {
  name        = "gamex"
  port        = 3000
  protocol    = "HTTP"
  target_type = "ip"
  vpc_id      = data.aws_vpc.default.id

  health_check {
    path                = "/api/health"
    interval            = 30
    timeout             = 5
    healthy_threshold   = 2
    unhealthy_threshold = 5
  }
}

resource "aws_lb_listener" "gamex" {
  load_balancer_arn = aws_lb.gamex.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.gamex.arn
  }
}

# --- CloudWatch Logs ---

resource "aws_cloudwatch_log_group" "gamex" {
  name              = "/ecs/gamex"
  retention_in_days = 7
}
