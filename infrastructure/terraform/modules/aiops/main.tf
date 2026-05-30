# ─── IAM Role for Lambda ─────────────────────────────────────────
data "aws_iam_policy_document" "lambda_assume_role" {
  statement {
    effect = "Allow"
    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
    actions = ["sts:AssumeRole"]
  }
}

resource "aws_iam_role" "aiops_lambda" {
  name               = "AIOpsLambdaRole"
  assume_role_policy = data.aws_iam_policy_document.lambda_assume_role.json
}

resource "aws_iam_role_policy_attachment" "lambda_basic" {
  role       = aws_iam_role.aiops_lambda.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_iam_role_policy_attachment" "cloudwatch_logs_read" {
  role       = aws_iam_role.aiops_lambda.name
  policy_arn = "arn:aws:iam::aws:policy/CloudWatchLogsReadOnlyAccess"
}

resource "aws_iam_role_policy_attachment" "sns_publish" {
  role       = aws_iam_role.aiops_lambda.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonSNSFullAccess"
}

resource "aws_iam_role_policy_attachment" "bedrock_access" {
  role       = aws_iam_role.aiops_lambda.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonBedrockFullAccess"
}

# ─── Lambda ZIP package ──────────────────────────────────────────
data "archive_file" "lambda_zip" {
  type        = "zip"
  source_file = "${path.module}/lambda_function.py"
  output_path = "${path.module}/lambda_function.zip"
}

# ─── Lambda Function ─────────────────────────────────────────────
resource "aws_lambda_function" "aiops" {
  function_name    = "aiops-error-analyzer"
  role             = aws_iam_role.aiops_lambda.arn
  handler          = "lambda_function.lambda_handler"
  runtime          = "python3.12"
  filename         = data.archive_file.lambda_zip.output_path
  source_code_hash = data.archive_file.lambda_zip.output_base64sha256
  timeout          = 60
  memory_size      = 256

  environment {
    variables = {
      SNS_TOPIC_ARN = var.sns_topic_arn
      AWS_REGION    = var.aws_region
    }
  }

  tags = { Name = "aiops-error-analyzer" }
}

# ─── EventBridge Rule ────────────────────────────────────────────
resource "aws_cloudwatch_event_rule" "aiops_trigger" {
  name        = "aiops-alarm-trigger"
  description = "Trigger AIOps Lambda when any CloudWatch alarm enters ALARM state"

  event_pattern = jsonencode({
    source      = ["aws.cloudwatch"]
    detail-type = ["CloudWatch Alarm State Change"]
    detail = {
      state = {
        value = ["ALARM"]
      }
    }
  })

  tags = { Name = "aiops-alarm-trigger" }
}

resource "aws_cloudwatch_event_target" "aiops_lambda" {
  rule      = aws_cloudwatch_event_rule.aiops_trigger.name
  target_id = "AIOpsLambdaTarget"
  arn       = aws_lambda_function.aiops.arn
}

# ─── Lambda Permission for EventBridge ───────────────────────────
resource "aws_lambda_permission" "eventbridge" {
  statement_id  = "AllowEventBridgeInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.aiops.function_name
  principal     = "events.amazonaws.com"
  source_arn    = aws_cloudwatch_event_rule.aiops_trigger.arn
}
