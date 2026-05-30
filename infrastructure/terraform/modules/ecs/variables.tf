variable "project_name" { type = string }
variable "environment" { type = string }
variable "aws_region" { type = string }
variable "aws_account_id" { type = string }
variable "private_subnet_ids" { type = list(string) }
variable "ecs_sg_id" { type = string }

variable "auth_service_tg_arn" { type = string }
variable "user_service_tg_arn" { type = string }
variable "api_gateway_tg_arn" { type = string }

variable "auth_image_uri" { type = string }
variable "user_image_uri" { type = string }
variable "gateway_image_uri" { type = string }

variable "jwt_secret" { type = string; sensitive = true }
variable "db_host" { type = string }
variable "db_name" { type = string }
variable "db_username" { type = string }
variable "db_password" { type = string; sensitive = true }

variable "cors_allowed_origins_1" { type = string }
variable "cors_allowed_origins_2" { type = string }
variable "alb_dns_name" { type = string }
