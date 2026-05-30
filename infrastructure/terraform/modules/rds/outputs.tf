output "rds_endpoint" {
  description = "RDS endpoint hostname (without port) — use as DB_HOST"
  value       = split(":", aws_db_instance.main.endpoint)[0]
}
output "rds_port" { value = aws_db_instance.main.port }
output "rds_instance_id" { value = aws_db_instance.main.id }
