output "dashboard_name" { value = aws_cloudwatch_dashboard.main.dashboard_name }
output "alb_5xx_alarm_arn" { value = aws_cloudwatch_metric_alarm.alb_5xx_errors.arn }
