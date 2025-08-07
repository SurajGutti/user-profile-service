# User Profile Service

A simple user profile service using Fastify, PostgreSQL, Prisma, and Docker.

## Endpoints

- `GET /profiles` - List all profiles
- `GET /profiles/:id` - Get a specific profile
- `POST /profiles` - Create new profile
- `PUT /profiles/:id` - Update existing profile

## Setup

```bash
docker-compose up --build
npx prisma migrate dev --name init
```
