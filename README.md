# task-eyego
# Kafka Auth Logs Microservices

A simple event-driven architecture using Node.js, Kafka, and MongoDB with Docker support.

## 🧩 Architecture Overview

- **auth-service**: Responsible for simulating login/logout actions. It sends events to Kafka.
- **log-service**: Consumes Kafka events and stores them in MongoDB. It also provides a REST API to fetch logs with pagination and filtering.
- **Kafka**: Event broker facilitating communication between microservices.
- **MongoDB**: Stores logs data.

## 🛠️ Tech Stack
- Node.js + Express
- Kafka (via KafkaJS)
- MongoDB (via Mongoose)
- Docker + Docker Compose

## 🚀 Getting Started

### Prerequisites
- Docker & Docker Compose installed

### Running the Services

```bash
docker-compose up --build
```

### Testing Auth Events

Send POST requests to `auth-service`:

```bash
POST http://localhost:3000/auth/login
{
  "userId": "123"
}

POST http://localhost:3000/auth/logout
{
  "userId": "123"
}
```

### Fetch Logs

```bash
GET http://localhost:4000/logs?page=1&limit=10&userId=123&eventType=LOGIN
```

## 📦 Docker Compose
- Starts Zookeeper, Kafka, MongoDB, `auth-service`, and `log-service`
- Ensures services wait for Kafka to be ready using `wait-for-kafka.sh`

## 📐 Domain-Driven Design (DDD)
- Folders are organized by domain (auth, logs)
- Each module contains its own controller, service/repository, and routes/schema
- Promotes separation of concerns and future scalability

## 🧠 Why This Architecture?
- Kafka decouples microservices, improving scalability & reliability
- MongoDB is great for storing unstructured log data
- Docker ensures reproducible environments
- DDD makes the codebase modular and maintainable

---
Enjoy building event-driven systems# task-eyego
