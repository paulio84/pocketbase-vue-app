# PocketBase Vue App

A modern full-stack authentication application built with Vue 3, TypeScript, and PocketBase.

## Features

- Vue 3 + TypeScript + Vite
- Tailwind CSS v4 with dark mode
- Docker deployment with nginx
- PocketBase backend (coming soon)
- Authentication system (coming soon)

## Local Development

### Prerequisites

- Node.js 22+
- Docker (optional, for containerised deployment)

### Setup

1. Clone the repository
2. Navigate to frontend:

```bash
   cd frontend
   npm install
```

3. Run development server

```bash
   npm run dev
```

4. Access at `http://localhost:5173`

## Docker Deployment

Build and run with Docker:

```bash
   docker-compose up --build
```

Access at `http://localhost`

## Project Structure

```
pocketbase-vue-app/
|- frontend/        # Vue 3 application
|  |- src/
|  |  |- components/
|  |  |- composables/
|  |  `- views/
|  |- Dockerfile
|  `- nginx.conf
|- docker-compose.yml
`- README.md
```

## Development Workflow

- `main` - Production-ready code
- `develop` - Integration branch
- `feature/*` - Feature branches
- `docs/*` - Documentation branches

All PRs go to `develop`, then `develop` -> `main` for releases.
