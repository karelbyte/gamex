<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:deploy -->
# Deploy (automatic)

Push to `main` → GitHub Actions lo hace todo:

1. **Terraform** crea toda la infraestructura (RDS Aurora Serverless v2, ECR, ECS Fargate, ALB, SGs, IAM)
2. **Docker** build & push a ECR
3. **ECS** force redeployment

## Prerrequisitos

| Secret en GitHub | Descripción |
|---|---|
| `AWS_ACCESS_KEY_ID` | Access Key con permisos de administrador |
| `AWS_SECRET_ACCESS_KEY` | Secret Key |
| `AUTH_SECRET` | `openssl rand -base64 32` |

## Estructura Terraform

- `terraform/main.tf` — todo el infra (RDS, ECS, ALB, ECR, SGs, IAM)
- `terraform/backend.tf` — backend S3 con lock en S3
- El bucket S3 se crea automáticamente en el primer deploy
- La contraseña de RDS es generada aleatoriamente y guardada en el state de Terraform

## Local dev

```bash
npm run dev
```

Requiere PostgreSQL corriendo en local. Configura `DATABASE_URL` en `.env` si usas credenciales distintas a `postgres:postgres@localhost:5432/gamex`.
<!-- END:deploy -->
