# ─── General ─────────────────────────────────────────────────────
variable "aws_region" {
  description = "AWS region for all resources"
  type        = string
  default     = "eu-north-1"
}

variable "project_name" {
  description = "Project name used in resource naming and tagging"
  type        = string
  default     = "cybrmoon"
}

variable "environment" {
  description = "Deployment environment"
  type        = string
  default     = "production"
}

variable "aws_account_id" {
  description = "AWS account ID — used to construct ECR URIs and IAM ARNs"
  type        = string
  default     = "314772756285"
}

# ─── VPC ─────────────────────────────────────────────────────────
variable "vpc_cidr" {
  description = "CIDR block for the VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "public_subnet_cidrs" {
  description = "CIDR blocks for the two public subnets"
  type        = list(string)
  default     = ["10.0.1.0/24", "10.0.2.0/24"]
}

variable "private_subnet_cidrs" {
  description = "CIDR blocks for the two private subnets"
  type        = list(string)
  default     = ["10.0.3.0/24", "10.0.4.0/24"]
}

variable "availability_zones" {
  description = "Availability zones to spread subnets across"
  type        = list(string)
  default     = ["eu-north-1a", "eu-north-1b"]
}

# ─── ECR ─────────────────────────────────────────────────────────
variable "ecr_repositories" {
  description = "List of ECR repository names to create"
  type        = list(string)
  default     = ["auth-service", "user-service", "api-gateway"]
}

variable "image_tag" {
  description = "Docker image tag to deploy (git SHA). Set by CI/CD pipeline."
  type        = string
  default     = "latest"
}

# ─── RDS ─────────────────────────────────────────────────────────
variable "db_name" {
  description = "PostgreSQL database name"
  type        = string
  default     = "authdb"
}

variable "db_username" {
  description = "PostgreSQL master username"
  type        = string
  default     = "postgres"
}

variable "db_password" {
  description = "PostgreSQL master password — use a strong value in tfvars, never commit"
  type        = string
  sensitive   = true
}

variable "db_instance_class" {
  description = "RDS instance class"
  type        = string
  default     = "db.t3.micro"
}

# ─── ECS / App ───────────────────────────────────────────────────
variable "jwt_secret" {
  description = "JWT signing secret — minimum 256-bit base64 encoded key"
  type        = string
  sensitive   = true
}

variable "cors_allowed_origins_1" {
  description = "First allowed CORS origin (local dev)"
  type        = string
  default     = "http://localhost:3000"
}

variable "cors_allowed_origins_2" {
  description = "Second allowed CORS origin (production frontend)"
  type        = string
  default     = "https://app.cybrmoon.space"
}

# ─── ALB / DNS ───────────────────────────────────────────────────
variable "acm_certificate_arn" {
  description = "ARN of the ACM wildcard certificate for *.cybrmoon.space"
  type        = string
}

variable "hosted_zone_id" {
  description = "Route 53 hosted zone ID for cybrmoon.space"
  type        = string
}

variable "cloudfront_domain_name" {
  description = "CloudFront distribution domain name for app.cybrmoon.space"
  type        = string
}

variable "cloudfront_zone_id" {
  description = "CloudFront hosted zone ID — always Z2FDTNDATAQYW2 for CloudFront"
  type        = string
  default     = "Z2FDTNDATAQYW2"
}

# ─── Observability ───────────────────────────────────────────────
variable "alert_email" {
  description = "Email address to receive SNS alarm and AIOps notifications"
  type        = string
}
