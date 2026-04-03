# AWS Microservices — Auth Service

A Spring Boot 3 authentication microservice using JWT, BCrypt, and PostgreSQL.

## Running Locally

```bash
# 1. Copy environment template
cp .env.example .env

# 2. Fill in your values (see below)
# 3. Start all services
docker-compose up --build
```

## Environment Variables

| Variable | Description | Example |
|---|---|---|
| `JWT_SECRET` | HMAC-SHA256 signing key (min 32 bytes) | `openssl rand -base64 32` |
| `DB_HOST` | PostgreSQL host | `postgres` |
| `DB_PORT` | PostgreSQL port | `5432` |
| `DB_NAME` | Database name | `authdb` |
| `DB_USERNAME` | Database user | `postgres` |
| `DB_PASSWORD` | Database password | — |
| `CORS_ALLOWED_ORIGINS` | Comma-separated allowed origins | `http://localhost:3000` |

## Generating a Secure JWT Secret

```bash
openssl rand -base64 32
```

This produces a cryptographically random 256-bit base64-encoded key suitable for HMAC-SHA256.

## AWS Production Deployment

> [!IMPORTANT]
> **Do NOT use `.env` files in production.**
>
> On AWS, inject secrets via **AWS Secrets Manager**:
>
> 1. Store `JWT_SECRET`, `DB_PASSWORD` etc. in [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/)
> 2. Reference them in your **ECS Task Definition** as environment variables:
>    ```json
>    {
>      "secrets": [
>        { "name": "JWT_SECRET", "valueFrom": "arn:aws:secretsmanager:region:account:secret:jwt-secret" },
>        { "name": "DB_PASSWORD", "valueFrom": "arn:aws:secretsmanager:region:account:secret:db-password" }
>      ]
>    }
>    ```
> 3. Grant the ECS **Task Execution Role** `secretsmanager:GetSecretValue` permission
> 4. The Spring Boot app reads them from environment — **zero code changes required**

## API Endpoints

| Method | Path | Auth | Description |
|---|---|---|---|
| `POST` | `/auth/register` | None | Register new user |
| `POST` | `/auth/login` | None | Login, returns JWT |
| `GET` | `/users/profile` | Bearer JWT | Get user profile (user-service) |

All requests route through API Gateway on port `8080`.

## Schema Management

Database schema is managed by **Flyway**. Migrations live in:
```
auth-service/src/main/resources/db/migration/
```
`ddl-auto` is set to `validate` — Flyway runs migrations at startup, Hibernate only validates the schema.
