# User Profile Service

This project is a simple user profile REST API built using **Fastify**, **PostgreSQL**, **Prisma**, and **Docker**. It allows creating, retrieving, and updating user profiles.

---

## Tech Stack

- **Fastify** — Web framework for high performance
- **Prisma** — Type-safe ORM for PostgreSQL
- **Docker** — Containerized setup
- **Vitest** — Unit testing
- **ESLint + Prettier** — Code quality

---

## Setup Instructions

### 1. Clone the repository

```
bash
git clone https://github.com/yourusername/user-profile-service.git
cd user-profile-service
```

### 2. Install dependencies

```
bash
docker-compose up -d
```

### 3. Start the services with Docker

```
docker-compose up -d

```

### 4. Run Prisma migration

```
npx prisma migrate dev --name init
```

### 5. Start the development server

```
npm run dev
```

### 6. Run test

```
npm run test
```

## HTTP Methods and Route Design Reasoning

> GET /profiles – List all user profiles.

> GET /profiles/:id – Fetch one user profile by ID.

> POST /profiles – Create a new profile using request body.

> PUT /profiles/:id – Update a profile using ID and body.

> This keeps the API intuitive and adheres to standard REST principles, making it easy for other developers or tools to integrate.

## Trade-offs & Assumptions

> Date Format: Assumes ISO 8601 (YYYY-MM-DD) format for dateOfBirth.

> No DELETE endpoint: Not required in the spec; can be added if needed.

> No auth or user validation: This is a simplified example to focus on core functionality and quality.

> Minimal validation: Input validation could be expanded using libraries like zod or joi.

> Prisma chosen over raw SQL: For faster development and type safety.
