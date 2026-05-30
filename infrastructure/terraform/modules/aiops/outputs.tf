output "lambda_function_name" { value = aws_lambda_function.aiops.function_name }
output "lambda_function_arn" { value = aws_lambda_function.aiops.arn }
output "eventbridge_rule_name" { value = aws_cloudwatch_event_rule.aiops_trigger.name }
output "lambda_role_arn" { value = aws_iam_role.aiops_lambda.arn }
