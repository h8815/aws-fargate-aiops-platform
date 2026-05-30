# ─── ALB 5XX Errors Alarm ────────────────────────────────────────
resource "aws_cloudwatch_metric_alarm" "alb_5xx_errors" {
  alarm_name          = "alb-5xx-errors-high"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 1
  metric_name         = "HTTPCode_ELB_5XX_Count"
  namespace           = "AWS/ApplicationELB"
  period              = 300
  statistic           = "Sum"
  threshold           = 10
  alarm_description   = "ALB 5XX error count exceeds 10 in 5 minutes"
  treat_missing_data  = "notBreaching"

  dimensions = {
    LoadBalancer = var.alb_arn_suffix
  }

  alarm_actions = [var.sns_topic_arn]
  ok_actions    = [var.sns_topic_arn]
}

# ─── CPU Alarms — all 3 services ─────────────────────────────────
resource "aws_cloudwatch_metric_alarm" "auth_cpu" {
  alarm_name          = "auth-service-cpu-high"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 2
  metric_name         = "CPUUtilization"
  namespace           = "AWS/ECS"
  period              = 300
  statistic           = "Average"
  threshold           = 80
  alarm_description   = "Auth Service CPU utilization exceeds 80%"
  treat_missing_data  = "notBreaching"

  dimensions = {
    ClusterName = var.ecs_cluster_name
    ServiceName = "auth-service"
  }

  alarm_actions = [var.sns_topic_arn]
  ok_actions    = [var.sns_topic_arn]
}

resource "aws_cloudwatch_metric_alarm" "user_cpu" {
  alarm_name          = "user-service-cpu-high"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 2
  metric_name         = "CPUUtilization"
  namespace           = "AWS/ECS"
  period              = 300
  statistic           = "Average"
  threshold           = 80
  alarm_description   = "User Service CPU utilization exceeds 80%"
  treat_missing_data  = "notBreaching"

  dimensions = {
    ClusterName = var.ecs_cluster_name
    ServiceName = "user-service"
  }

  alarm_actions = [var.sns_topic_arn]
  ok_actions    = [var.sns_topic_arn]
}

resource "aws_cloudwatch_metric_alarm" "gateway_cpu" {
  alarm_name          = "api-gateway-cpu-high"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 2
  metric_name         = "CPUUtilization"
  namespace           = "AWS/ECS"
  period              = 300
  statistic           = "Average"
  threshold           = 80
  alarm_description   = "API Gateway CPU utilization exceeds 80%"
  treat_missing_data  = "notBreaching"

  dimensions = {
    ClusterName = var.ecs_cluster_name
    ServiceName = "api-gateway"
  }

  alarm_actions = [var.sns_topic_arn]
  ok_actions    = [var.sns_topic_arn]
}

# ─── Unhealthy Host Alarms — all 3 target groups ─────────────────
resource "aws_cloudwatch_metric_alarm" "auth_unhealthy" {
  alarm_name          = "auth-service-unhealthy-hosts"
  comparison_operator = "GreaterThanOrEqualToThreshold"
  evaluation_periods  = 1
  metric_name         = "UnHealthyHostCount"
  namespace           = "AWS/ApplicationELB"
  period              = 60
  statistic           = "Average"
  threshold           = 1
  alarm_description   = "Auth Service has at least 1 unhealthy host"
  treat_missing_data  = "notBreaching"

  dimensions = {
    LoadBalancer = var.alb_arn_suffix
    TargetGroup  = var.auth_tg_arn_suffix
  }

  alarm_actions = [var.sns_topic_arn]
  ok_actions    = [var.sns_topic_arn]
}

resource "aws_cloudwatch_metric_alarm" "user_unhealthy" {
  alarm_name          = "user-service-unhealthy-hosts"
  comparison_operator = "GreaterThanOrEqualToThreshold"
  evaluation_periods  = 1
  metric_name         = "UnHealthyHostCount"
  namespace           = "AWS/ApplicationELB"
  period              = 60
  statistic           = "Average"
  threshold           = 1
  alarm_description   = "User Service has at least 1 unhealthy host"
  treat_missing_data  = "notBreaching"

  dimensions = {
    LoadBalancer = var.alb_arn_suffix
    TargetGroup  = var.user_tg_arn_suffix
  }

  alarm_actions = [var.sns_topic_arn]
  ok_actions    = [var.sns_topic_arn]
}

resource "aws_cloudwatch_metric_alarm" "gateway_unhealthy" {
  alarm_name          = "api-gateway-unhealthy-hosts"
  comparison_operator = "GreaterThanOrEqualToThreshold"
  evaluation_periods  = 1
  metric_name         = "UnHealthyHostCount"
  namespace           = "AWS/ApplicationELB"
  period              = 60
  statistic           = "Average"
  threshold           = 1
  alarm_description   = "API Gateway has at least 1 unhealthy host"
  treat_missing_data  = "notBreaching"

  dimensions = {
    LoadBalancer = var.alb_arn_suffix
    TargetGroup  = var.api_tg_arn_suffix
  }

  alarm_actions = [var.sns_topic_arn]
  ok_actions    = [var.sns_topic_arn]
}

# ─── CloudWatch Dashboard ────────────────────────────────────────
resource "aws_cloudwatch_dashboard" "main" {
  dashboard_name = "microservices-dashboard"

  dashboard_body = jsonencode({
    widgets = [
      {
        type   = "metric"
        x      = 0; y = 0; width = 6; height = 6
        properties = {
          title  = "RequestCount"
          metrics = [["AWS/ApplicationELB", "RequestCount", "LoadBalancer", var.alb_arn_suffix]]
          period = 60; stat = "Sum"; view = "timeSeries"
          region = var.aws_region
        }
      },
      {
        type   = "metric"
        x      = 6; y = 0; width = 6; height = 6
        properties = {
          title  = "HTTPCode_ELB_5XX_Count"
          metrics = [["AWS/ApplicationELB", "HTTPCode_ELB_5XX_Count", "LoadBalancer", var.alb_arn_suffix]]
          period = 60; stat = "Sum"; view = "timeSeries"
          region = var.aws_region
        }
      },
      {
        type   = "metric"
        x      = 12; y = 0; width = 6; height = 6
        properties = {
          title  = "CPUUtilization"
          metrics = [
            ["AWS/ECS", "CPUUtilization", "ClusterName", var.ecs_cluster_name, "ServiceName", "auth-service"],
            ["AWS/ECS", "CPUUtilization", "ClusterName", var.ecs_cluster_name, "ServiceName", "user-service"],
            ["AWS/ECS", "CPUUtilization", "ClusterName", var.ecs_cluster_name, "ServiceName", "api-gateway"]
          ]
          period = 60; stat = "Average"; view = "timeSeries"
          region = var.aws_region
        }
      },
      {
        type   = "metric"
        x      = 18; y = 0; width = 6; height = 6
        properties = {
          title  = "MemoryUtilization"
          metrics = [
            ["AWS/ECS", "MemoryUtilization", "ClusterName", var.ecs_cluster_name, "ServiceName", "auth-service"],
            ["AWS/ECS", "MemoryUtilization", "ClusterName", var.ecs_cluster_name, "ServiceName", "user-service"],
            ["AWS/ECS", "MemoryUtilization", "ClusterName", var.ecs_cluster_name, "ServiceName", "api-gateway"]
          ]
          period = 60; stat = "Average"; view = "timeSeries"
          region = var.aws_region
        }
      },
      {
        type   = "metric"
        x      = 0; y = 6; width = 24; height = 3
        properties = {
          title  = "UnHealthyHostCount"
          metrics = [
            ["AWS/ApplicationELB", "UnHealthyHostCount", "LoadBalancer", var.alb_arn_suffix, "TargetGroup", var.auth_tg_arn_suffix],
            ["AWS/ApplicationELB", "UnHealthyHostCount", "LoadBalancer", var.alb_arn_suffix, "TargetGroup", var.user_tg_arn_suffix],
            ["AWS/ApplicationELB", "UnHealthyHostCount", "LoadBalancer", var.alb_arn_suffix, "TargetGroup", var.api_tg_arn_suffix]
          ]
          period = 60; stat = "Average"; view = "singleValue"
          region = var.aws_region
        }
      },
      {
        type   = "alarm"
        x      = 0; y = 9; width = 24; height = 3
        properties = {
          title  = "Alarms"
          alarms = [
            "arn:aws:cloudwatch:${var.aws_region}:*:alarm:alb-5xx-errors-high",
            "arn:aws:cloudwatch:${var.aws_region}:*:alarm:auth-service-cpu-high",
            "arn:aws:cloudwatch:${var.aws_region}:*:alarm:user-service-cpu-high",
            "arn:aws:cloudwatch:${var.aws_region}:*:alarm:api-gateway-cpu-high",
            "arn:aws:cloudwatch:${var.aws_region}:*:alarm:auth-service-unhealthy-hosts",
            "arn:aws:cloudwatch:${var.aws_region}:*:alarm:user-service-unhealthy-hosts",
            "arn:aws:cloudwatch:${var.aws_region}:*:alarm:api-gateway-unhealthy-hosts"
          ]
        }
      }
    ]
  })
}
