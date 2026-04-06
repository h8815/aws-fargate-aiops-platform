variable "aws_region" {
  description = "The AWS region to deploy resources into"
  type        = string
  default     = "eu-north-1"
}

variable "project_name" {
  description = "The name of the project, used for resource naming and tagging"
  type        = string
  default     = "cybrmoon"
}

variable "environment" {
  description = "The deployment environment (e.g. production, staging, dev)"
  type        = string
  default     = "production"
}
