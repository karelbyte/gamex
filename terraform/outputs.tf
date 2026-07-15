output "alb_dns" {
  value       = aws_lb.gamex.dns_name
  description = "URL pública del juego"
}

output "rds_endpoint" {
  value       = aws_rds_cluster.gamex.endpoint
  description = "RDS cluster endpoint"
}

output "ecs_cluster_name" {
  value = aws_ecs_cluster.gamex.name
}
