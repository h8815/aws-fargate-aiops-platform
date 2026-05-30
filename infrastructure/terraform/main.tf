terraform {
  required_version = ">= 1.7.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket         = "cybrmoon-terraform-state-314772756285"
    key            = "microservices/terraform.tfstate"
    region         = "eu-north-1"
    dynamodb_table = "terraform-state-lock"
    encrypt        = true
  }
}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = "CybrMoon"
      Environment = var.environment
      ManagedBy   = "Terraform"
    }
  }
}

# ─── VPC ─────────────────────────────────────────────────────────
module "vpc" {
  source = "./modules/vpc"

  project_name         = var.project_name
  environment          = var.environment
  vpc_cidr             = var.vpc_cidr
  public_subnet_cidrs  = var.public_subnet_cidrs
  private_subnet_cidrs = var.private_subnet_cidrs
  availability_zones   = var.availability_zones
}

# ─── SECURITY GROUPS ─────────────────────────────────────────────
module "security_groups" {
  source = "./modules/security-groups"

  project_name = var.project_name
  vpc_id       = module.vpc.vpc_id
}

# ─── ECR ─────────────────────────────────────────────────────────
module "ecr" {
  source = "./modules/ecr"

  project_name = var.project_name
  repositories = var.ecr_repositories
}

# ─── RDS ─────────────────────────────────────────────────────────
module "rds" {
  source = "./modules/rds"

  project_name       = var.project_name
  environment        = var.environment
  private_subnet_ids = module.vpc.private_subnet_ids
  rds_sg_id          = module.security_groups.rds_sg_id
  db_name            = var.db_name
  db_username        = var.db_username
  db_password        = var.db_password
  db_instance_class  = var.db_instance_class
}

# ─── SNS ─────────────────────────────────────────────────────────
module "sns" {
  source = "./modules/sns"

  project_name = var.project_name
  alert_email  = var.alert_email
}

# ─── ALB ─────────────────────────────────────────────────────────
module "alb" {
  source = "./modules/alb"

  project_name        = var.project_name
  vpc_id              = module.vpc.vpc_id
  public_subnet_ids   = module.vpc.public_subnet_ids
  alb_sg_id           = module.security_groups.alb_sg_id
  acm_certificate_arn = var.acm_certificate_arn
}

# ─── ECS ─────────────────────────────────────────────────────────
module "ecs" {
  source = "./modules/ecs"

  project_name       = var.project_name
  environment        = var.environment
  aws_region         = var.aws_region
  aws_account_id     = var.aws_account_id
  private_subnet_ids = module.vpc.private_subnet_ids
  ecs_sg_id          = module.security_groups.ecs_sg_id

  auth_service_tg_arn  = module.alb.auth_service_tg_arn
  user_service_tg_arn  = module.alb.user_service_tg_arn
  api_gateway_tg_arn   = module.alb.api_gateway_tg_arn

  auth_image_uri    = "${module.ecr.auth_service_repository_url}:${var.image_tag}"
  user_image_uri    = "${module.ecr.user_service_repository_url}:${var.image_tag}"
  gateway_image_uri = "${module.ecr.api_gateway_repository_url}:${var.image_tag}"

  jwt_secret  = var.jwt_secret
  db_host     = module.rds.rds_endpoint
  db_name     = var.db_name
  db_username = var.db_username
  db_password = var.db_password

  cors_allowed_origins_1 = var.cors_allowed_origins_1
  cors_allowed_origins_2 = var.cors_allowed_origins_2
  alb_dns_name           = module.alb.alb_dns_name
}

# ─── CLOUDWATCH ──────────────────────────────────────────────────
module "cloudwatch" {
  source = "./modules/cloudwatch"

  project_name       = var.project_name
  aws_region         = var.aws_region
  sns_topic_arn      = module.sns.sns_topic_arn
  alb_arn_suffix     = module.alb.alb_arn_suffix
  auth_tg_arn_suffix = module.alb.auth_service_tg_arn_suffix
  user_tg_arn_suffix = module.alb.user_service_tg_arn_suffix
  api_tg_arn_suffix  = module.alb.api_gateway_tg_arn_suffix
  ecs_cluster_name   = module.ecs.cluster_name
}

# ─── AIOPS ───────────────────────────────────────────────────────
module "aiops" {
  source = "./modules/aiops"

  project_name   = var.project_name
  aws_region     = var.aws_region
  aws_account_id = var.aws_account_id
  sns_topic_arn  = module.sns.sns_topic_arn
}

# ─── ROUTE53 ─────────────────────────────────────────────────────
module "route53" {
  source = "./modules/route53"

  hosted_zone_id         = var.hosted_zone_id
  alb_dns_name           = module.alb.alb_dns_name
  alb_zone_id            = module.alb.alb_zone_id
  cloudfront_domain_name = var.cloudfront_domain_name
  cloudfront_zone_id     = var.cloudfront_zone_id
}
