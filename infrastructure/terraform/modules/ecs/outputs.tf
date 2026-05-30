output "cluster_name" { value = aws_ecs_cluster.main.name }
output "cluster_arn" { value = aws_ecs_cluster.main.arn }
output "auth_service_name" { value = aws_ecs_service.auth_service.name }
output "user_service_name" { value = aws_ecs_service.user_service.name }
output "api_gateway_name" { value = aws_ecs_service.api_gateway.name }
output "task_execution_role_arn" { value = aws_iam_role.ecs_task_execution.arn }
