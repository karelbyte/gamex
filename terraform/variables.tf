variable "region" {
  default = "us-east-2"
}

variable "auth_secret" {
  description = "Secret for NextAuth.js - generate with: openssl rand -base64 32"
  sensitive   = true
}

variable "rds_host" {
  description = "RDS instance endpoint"
}

variable "rds_port" {
  default = 5432
}

variable "rds_user" {
  default = "postgres"
}

variable "rds_database" {
  description = "Database name on RDS (create it via psql or use 'postgres' if none exists)"
  default     = "postgres"
}

variable "rds_security_group_id" {
  description = "RDS security group ID (to allow ECS traffic on 5432)"
  default     = ""
}

variable "image_tag" {
  default = "latest"
}

variable "ecr_repository_name" {
  default = "gamex"
}
