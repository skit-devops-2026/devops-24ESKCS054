.PHONY: install test build run docker-build docker-up

install:
    cd User && npm ci
    cd ../admin && npm ci

test:
    node tests/basic.test.js

build:
    cd User && npm run build
    cd ../admin && npm run build

run:
    cd User && npm run dev

docker-build:
    echo "Docker build will be configured in M4"

docker-up:
    docker compose up --build
