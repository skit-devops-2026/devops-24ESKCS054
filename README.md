# Project ELARA

> **Live Public URL (User Frontend):** https://projectelara-user.onrender.com

Project ELARA is a full-stack healthcare service booking web application with separate User and Admin frontends backed by a Node.js/Express REST API connected to MongoDB Atlas.

## Author

| Roll No | Name | GitHub Username |
|---|---|---|
| 24ESKCS054 | Anurag Gurjar | anuraggurjar96 |

## Project Structure

```
Project ELARA/
├── User/               — User-facing React application
├── admin/              — Admin React application
├── backend/            — Node.js/Express REST API
├── k8s/                — Kubernetes manifests
├── monitoring/         — Prometheus + Grafana configuration
├── docs/               — Screenshots and evidence
├── tests/              — Automated tests
├── .github/workflows/  — GitHub Actions CI
├── Jenkinsfile         — Jenkins pipeline
├── Makefile            — Project automation commands
└── scripts/            — Repository hygiene checks
```

## Docker Hub Images

| Service | Image |
|---|---|
| Backend | `anuraggurjar96/projectelara-backend:mt2` |
| User Frontend | `anuraggurjar96/projectelara-user-frontend:mt2` |
| Admin Frontend | `anuraggurjar96/projectelara-admin-frontend:mt2` |

## GitHub Container Registry (GHCR) Images

| Service | Image |
|---|---|
| Backend | `ghcr.io/skit-devops-2026/devops-24eskcs054-backend:latest` |
| User Frontend | `ghcr.io/skit-devops-2026/devops-24eskcs054-user-frontend:latest` |
| Admin Frontend | `ghcr.io/skit-devops-2026/devops-24eskcs054-admin-frontend:latest` |

## Running with Docker Compose

```bash
# Start all three services (backend, user frontend, admin frontend)
docker compose up -d

# Ports:
# Backend:         http://localhost:5000
# User Frontend:   http://localhost:8082
# Admin Frontend:  http://localhost:8081
# Metrics:         http://localhost:5000/metrics
```

The backend reads environment variables from `backend/.env` (not committed — see `.gitignore`).

## Monitoring (Prometheus + Grafana)

```bash
# Start monitoring stack from monitoring/ directory
cd monitoring
docker compose up -d

# Access:
# Prometheus:  http://localhost:9090
# Grafana:     http://localhost:3000
```

Prometheus scrapes the backend `/metrics` endpoint via `host.docker.internal:5000`.

Grafana is provisioned automatically with:
- **Datasource**: Prometheus at `http://prometheus:9090`
- **Dashboard**: "Project Elara Monitoring" (Backend Availability + Node.js Heap Memory)

Dashboard JSON: [`monitoring/dashboard.json`](monitoring/dashboard.json)

Monitoring screenshot: [`docs/monitoring-dashboard.png`](docs/monitoring-dashboard.png)

## Kubernetes

Runs on Docker Desktop Kubernetes.

```bash
# Apply all manifests
kubectl apply -f k8s/backend-deployment-service.yaml
kubectl apply -f k8s/user-frontend-deployment-service.yaml
kubectl apply -f k8s/admin-frontend-deployment-service.yaml

# Verify pods
kubectl get pods -o wide
kubectl get deployments
kubectl get services

# Running services:
# elara-backend  ClusterIP  port 5000
# elara-user     NodePort   port 80:31984
# elara-admin    NodePort   port 80:31985
```

Secrets are stored in the `elara-secrets` Kubernetes Secret (never committed to Git).

Evidence: [`docs/kubectl-pods.txt`](docs/kubectl-pods.txt) | [`docs/kubectl-pods.png`](docs/kubectl-pods.png)

## DevOps CI/CD

- **GitHub Actions** (`.github/workflows/ci.yml`): Repository hygiene checks, dependency installation, automated tests, frontend builds.
- **Jenkins** (`Jenkinsfile`): Full CI/CD pipeline.

## Health & Metrics Endpoints

| Endpoint | Description |
|---|---|
| `GET /health` | Returns running commit SHA |
| `GET /metrics` | Prometheus Node.js metrics (prom-client) |

## Repository

https://github.com/skit-devops-2026/devops-24ESKCS054

## Live URL

https://projectelara-user.onrender.com

- User Frontend: https://projectelara-user.onrender.com
- Admin Frontend: https://projectelara-admin.onrender.com
- Backend Metrics: https://projectelara-backend.onrender.com/metrics

## Live Deployment

- User Frontend: https://projectelara-user.onrender.com
- Admin Frontend: https://projectelara-admin.onrender.com
- Backend Metrics: https://projectelara-backend.onrender.com/metrics
