# Project ELARA

Project ELARA is a full-stack web application with separate User and Admin applications.

## Author

| Roll No | Name | GitHub Username |
|---|---|---|
| 24ESKCS054 | Anurag Gurjar | anuraggurjar96 |
| 24ESKCS054 | Anurag Gurjar | anuraggurjar96 |

## Project Structure

- User/ — User application
- dmin/ — Admin application
- ackend/ — Backend application
- 	ests/ — Automated tests
- .github/workflows/ci.yml — GitHub Actions CI
- Jenkinsfile — Jenkins pipeline
- Makefile — Project automation commands
- scripts/ — Repository checks
- docs/ — Documentation
- monitoring/ — Monitoring configuration
- k8s/ — Kubernetes manifests

## DevOps

The project uses GitHub Actions for continuous integration and automated testing.

The CI pipeline performs:
- Repository hygiene checks
- Dependency installation
- Automated tests
- User application build
- Admin application build

Jenkins is used for the CI/CD pipeline.

## Health Endpoint

GET /health returns the running commit SHA.

## Repository

https://github.com/skit-devops-2026/devops-24ESKCS054
