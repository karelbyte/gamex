variable "region" {
  default = "us-east-2"
}

variable "auth_secret" {
  description = "Secret for NextAuth.js (generate with: openssl rand -base64 32)"
  sensitive   = true
}

variable "rds_user" {
  default = "postgres"
}

variable "rds_port" {
  default = 5432
}

variable "image_tag" {
  default = "latest"
}

variable "ecr_repository_name" {
  default = "gamex"
}
