variable "project_name" {
  description = "The name of the project, used for resource naming and tagging"
  type        = string
}

variable "environment" {
  description = "The deployment environment (e.g. production, staging, dev)"
  type        = string
}

variable "vpc_cidr" {
  description = "The CIDR block for the VPC"
  type        = string
}

variable "public_subnet_cidrs" {
  description = "List of CIDR blocks for the public subnets"
  type        = list(string)
}

variable "private_subnet_cidrs" {
  description = "List of CIDR blocks for the private subnets"
  type        = list(string)
}

variable "availability_zones" {
  description = "List of availability zones to deploy subnets into"
  type        = list(string)
}
