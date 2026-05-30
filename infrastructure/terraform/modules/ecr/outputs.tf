output "auth_service_repository_url" {
  value = aws_ecr_repository.services["auth-service"].repository_url
}
output "user_service_repository_url" {
  value = aws_ecr_repository.services["user-service"].repository_url
}
output "api_gateway_repository_url" {
  value = aws_ecr_repository.services["api-gateway"].repository_url
}
output "all_repository_urls" {
  value = { for k, v in aws_ecr_repository.services : k => v.repository_url }
}
