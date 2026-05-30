output "alb_dns_name" { value = aws_lb.main.dns_name }
output "alb_zone_id" { value = aws_lb.main.zone_id }
output "alb_arn" { value = aws_lb.main.arn }
output "alb_arn_suffix" { value = aws_lb.main.arn_suffix }

output "auth_service_tg_arn" { value = aws_lb_target_group.auth_service.arn }
output "user_service_tg_arn" { value = aws_lb_target_group.user_service.arn }
output "api_gateway_tg_arn" { value = aws_lb_target_group.api_gateway.arn }

output "auth_service_tg_arn_suffix" { value = aws_lb_target_group.auth_service.arn_suffix }
output "user_service_tg_arn_suffix" { value = aws_lb_target_group.user_service.arn_suffix }
output "api_gateway_tg_arn_suffix" { value = aws_lb_target_group.api_gateway.arn_suffix }

output "https_listener_arn" { value = aws_lb_listener.https.arn }
