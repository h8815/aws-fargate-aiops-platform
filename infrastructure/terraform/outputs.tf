output "vpc_id" {
  description = "VPC ID"
  value       = module.vpc.vpc_id
}

output "public_subnet_ids" {
  description = "Public subnet IDs"
  value       = module.vpc.public_subnet_ids
}

output "private_subnet_ids" {
  description = "Private subnet IDs"
  value       = module.vpc.private_subnet_ids
}

output "alb_dns_name" {
  description = "ALB DNS name — this is what api.cybrmoon.space points to"
  value       = module.alb.alb_dns_name
}

output "alb_zone_id" {
  description = "ALB hosted zone ID for Route 53 Alias records"
  value       = module.alb.alb_zone_id
}

output "rds_endpoint" {
  description = "RDS PostgreSQL endpoint"
  value       = module.rds.rds_endpoint
}

output "ecr_auth_service_url" {
  description = "ECR repository URL for auth-service"
  value       = module.ecr.auth_service_repository_url
}

output "ecr_user_service_url" {
  description = "ECR repository URL for user-service"
  value       = module.ecr.user_service_repository_url
}

output "ecr_api_gateway_url" {
  description = "ECR repository URL for api-gateway"
  value       = module.ecr.api_gateway_repository_url
}

output "ecs_cluster_name" {
  description = "ECS cluster name"
  value       = module.ecs.cluster_name
}

output "sns_topic_arn" {
  description = "SNS topic ARN for alerts"
  value       = module.sns.sns_topic_arn
}

output "lambda_function_name" {
  description = "AIOps Lambda function name"
  value       = module.aiops.lambda_function_name
}
