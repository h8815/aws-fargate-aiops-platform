# ─── IAM — Task Execution Role ───────────────────────────────────
data "aws_iam_policy_document" "ecs_assume_role" {
  statement {
    effect = "Allow"
    principals {
      type        = "Service"
      identifiers = ["ecs-tasks.amazonaws.com"]
    }
    actions = ["sts:AssumeRole"]
  }
}

resource "aws_iam_role" "ecs_task_execution" {
  name               = "ecsTaskExecutionRole"
  assume_role_policy = data.aws_iam_policy_document.ecs_assume_role.json
}

resource "aws_iam_role_policy_attachment" "ecs_task_execution" {
  role       = aws_iam_role.ecs_task_execution.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

resource "aws_iam_role_policy_attachment" "ecr_read" {
  role       = aws_iam_role.ecs_task_execution.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
}

# ─── ECS Cluster ─────────────────────────────────────────────────
resource "aws_ecs_cluster" "main" {
  name = "microservices-cluster"

  setting {
    name  = "containerInsights"
    value = "disabled"
  }

  tags = { Name = "microservices-cluster" }
}

# ─── CloudWatch Log Groups ────────────────────────────────────────
resource "aws_cloudwatch_log_group" "auth_service" {
  name              = "/ecs/auth-service"
  retention_in_days = 7
}

resource "aws_cloudwatch_log_group" "user_service" {
  name              = "/ecs/user-service"
  retention_in_days = 7
}

resource "aws_cloudwatch_log_group" "api_gateway" {
  name              = "/ecs/api-gateway"
  retention_in_days = 7
}

# ─── Task Definition — Auth Service ──────────────────────────────
resource "aws_ecs_task_definition" "auth_service" {
  family                   = "auth-service-td"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "512"
  memory                   = "1024"
  execution_role_arn       = aws_iam_role.ecs_task_execution.arn

  container_definitions = jsonencode([{
    name      = "auth-service"
    image     = var.auth_image_uri
    essential = true

    portMappings = [{
      name          = "auth-service-8081-tcp"
      containerPort = 8081
      hostPort      = 8081
      protocol      = "tcp"
      appProtocol   = "http"
    }]

    environment = [
      { name = "JWT_SECRET", value = var.jwt_secret },
      { name = "DB_HOST", value = var.db_host },
      { name = "DB_PORT", value = "5432" },
      { name = "DB_NAME", value = var.db_name },
      { name = "DB_USERNAME", value = var.db_username },
      { name = "DB_PASSWORD", value = var.db_password },
      { name = "CORS_ALLOWED_ORIGINS_1", value = var.cors_allowed_origins_1 },
      { name = "CORS_ALLOWED_ORIGINS_2", value = var.cors_allowed_origins_2 }
    ]

    logConfiguration = {
      logDriver = "awslogs"
      options = {
        "awslogs-group"         = "/ecs/auth-service"
        "awslogs-region"        = var.aws_region
        "awslogs-stream-prefix" = "ecs"
      }
    }
  }])

  tags = { Name = "auth-service-td" }
}

# ─── Task Definition — User Service ──────────────────────────────
resource "aws_ecs_task_definition" "user_service" {
  family                   = "user-service-td"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "512"
  memory                   = "1024"
  execution_role_arn       = aws_iam_role.ecs_task_execution.arn

  container_definitions = jsonencode([{
    name      = "user-service"
    image     = var.user_image_uri
    essential = true

    portMappings = [{
      name          = "user-service-8082-tcp"
      containerPort = 8082
      hostPort      = 8082
      protocol      = "tcp"
      appProtocol   = "http"
    }]

    environment = [
      { name = "JWT_SECRET", value = var.jwt_secret },
      { name = "CORS_ALLOWED_ORIGINS_1", value = var.cors_allowed_origins_1 },
      { name = "CORS_ALLOWED_ORIGINS_2", value = var.cors_allowed_origins_2 }
    ]

    logConfiguration = {
      logDriver = "awslogs"
      options = {
        "awslogs-group"         = "/ecs/user-service"
        "awslogs-region"        = var.aws_region
        "awslogs-stream-prefix" = "ecs"
      }
    }
  }])

  tags = { Name = "user-service-td" }
}

# ─── Task Definition — API Gateway ───────────────────────────────
resource "aws_ecs_task_definition" "api_gateway" {
  family                   = "api-gateway-td"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "512"
  memory                   = "1024"
  execution_role_arn       = aws_iam_role.ecs_task_execution.arn

  container_definitions = jsonencode([{
    name      = "api-gateway"
    image     = var.gateway_image_uri
    essential = true

    portMappings = [{
      name          = "api-gateway-8080-tcp"
      containerPort = 8080
      hostPort      = 8080
      protocol      = "tcp"
      appProtocol   = "http"
    }]

    environment = [
      { name = "JWT_SECRET", value = var.jwt_secret },
      { name = "AUTH_SERVICE_URI", value = "http://${var.alb_dns_name}" },
      { name = "USER_SERVICE_URI", value = "http://${var.alb_dns_name}" },
      { name = "CORS_ALLOWED_ORIGINS_1", value = var.cors_allowed_origins_1 },
      { name = "CORS_ALLOWED_ORIGINS_2", value = var.cors_allowed_origins_2 }
    ]

    logConfiguration = {
      logDriver = "awslogs"
      options = {
        "awslogs-group"         = "/ecs/api-gateway"
        "awslogs-region"        = var.aws_region
        "awslogs-stream-prefix" = "ecs"
      }
    }
  }])

  tags = { Name = "api-gateway-td" }
}

# ─── ECS Service — Auth Service ───────────────────────────────────
resource "aws_ecs_service" "auth_service" {
  name            = "auth-service"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.auth_service.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = var.private_subnet_ids
    security_groups  = [var.ecs_sg_id]
    assign_public_ip = false
  }

  load_balancer {
    target_group_arn = var.auth_service_tg_arn
    container_name   = "auth-service"
    container_port   = 8081
  }

  deployment_minimum_healthy_percent = 100
  deployment_maximum_percent         = 200

  lifecycle {
    ignore_changes = [task_definition]
  }

  tags = { Name = "auth-service" }
}

# ─── ECS Service — User Service ───────────────────────────────────
resource "aws_ecs_service" "user_service" {
  name            = "user-service"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.user_service.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = var.private_subnet_ids
    security_groups  = [var.ecs_sg_id]
    assign_public_ip = false
  }

  load_balancer {
    target_group_arn = var.user_service_tg_arn
    container_name   = "user-service"
    container_port   = 8082
  }

  deployment_minimum_healthy_percent = 100
  deployment_maximum_percent         = 200

  lifecycle {
    ignore_changes = [task_definition]
  }

  tags = { Name = "user-service" }
}

# ─── ECS Service — API Gateway ────────────────────────────────────
resource "aws_ecs_service" "api_gateway" {
  name            = "api-gateway"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.api_gateway.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = var.private_subnet_ids
    security_groups  = [var.ecs_sg_id]
    assign_public_ip = false
  }

  load_balancer {
    target_group_arn = var.api_gateway_tg_arn
    container_name   = "api-gateway"
    container_port   = 8080
  }

  deployment_minimum_healthy_percent = 100
  deployment_maximum_percent         = 200

  lifecycle {
    ignore_changes = [task_definition]
  }

  tags = { Name = "api-gateway" }
}
