# api.cybrmoon.space → ALB
resource "aws_route53_record" "api" {
  zone_id = var.hosted_zone_id
  name    = "api.cybrmoon.space"
  type    = "A"

  alias {
    name                   = var.alb_dns_name
    zone_id                = var.alb_zone_id
    evaluate_target_health = true
  }
}

# app.cybrmoon.space → CloudFront
resource "aws_route53_record" "app" {
  zone_id = var.hosted_zone_id
  name    = "app.cybrmoon.space"
  type    = "A"

  alias {
    name                   = var.cloudfront_domain_name
    zone_id                = var.cloudfront_zone_id
    evaluate_target_health = false
  }
}
