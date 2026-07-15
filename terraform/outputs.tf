output "alb_dns" {
  value = aws_lb.gamex.dns_name
  description = "URL pública del juego"
}

output "ecs_task_sg_id" {
  value = aws_security_group.ecs_tasks.id
  description = "Agregar este SG al inbound de RDS (puerto 5432)"
}

output "ecs_cluster_name" {
  value = aws_ecs_cluster.gamex.name
}
