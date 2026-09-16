# Vidya Kawach — Backend

A Node.js + Express REST API backend for the **Vidya Kawach** platform — a comprehensive school management system covering student identity & access, academics, fee payments, health services, insurance enrollment & claims, and AI-powered learning tools.

---

## Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Runtime     | Node.js 22 (ESM)                    |
| Framework   | Express 5                           |
| Database    | PostgreSQL 16                       |
| ORM         | Drizzle ORM                         |
| Security    | Helmet, CORS                        |
| Config      | dotenv                              |
| Linting     | ESLint                              |
| Testing     | Node.js built-in test runner        |
| Container   | Docker + Docker Compose             |

---

## Project Structure

```
vidya_kawach/
├── src/
│   ├── app.js              # Express app setup
│   ├── server.js           # Server entry point
│   ├── configs/            # Environment & app config
│   ├── db/                 # Drizzle schema definitions (grouped by domain)
│   │   ├── identity_access/        # Users, schools, students, classes, roles
│   │   ├── academics/              # Attendance, exams, marks, report cards, notices
│   │   ├── fee_payments/           # Invoices, payments, receipts, fee heads
│   │   ├── health_service/         # Hospitals, checkups, teleconsults, diagnostics
│   │   ├── insurance_enroll_claim/ # Plans, enrolments, claims, e-cards, consents
│   │   └── learnings/              # Games, olympiads, AI interactions, KB entries
│   ├── modules/            # Route handlers & business logic (by domain)
│   ├── shared/             # Shared utilities and middleware
│   └── utils/              # General helper utilities
├── drizzle/
│   └── migrations/         # Auto-generated SQL migration files
├── test/                   # Test files
├── drizzle.config.js       # Drizzle Kit configuration
├── docker-compose.yml      # Local dev stack (app + PostgreSQL)
├── Dockerfile              # Production container image
├── .env.example            # Example environment variables
└── package.json
```

---

## Getting Started

### Prerequisites

- [Node.js 22+](https://nodejs.org/)
- [PostgreSQL 16+](https://www.postgresql.org/) (or use Docker Compose)

### 1. Clone the repository

```bash
git clone <repo-url>
cd vidya_kawach
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` with your actual values:

```env
PORT=3000
NODE_ENV=development
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/postgres?sslmode=require"
```

### 4. Run database migrations

```bash
npm run db:migrate
```

### 5. Start the server

```bash
# Development (with file watching)
npm run dev

# Production
npm start
```

The API will be available at `http://localhost:3000`.

---

## Available Scripts

| Command            | Description                                    |
|--------------------|------------------------------------------------|
| `npm start`        | Start the server in production mode            |
| `npm run dev`      | Start the server with hot-reload (`--watch`)   |
| `npm test`         | Run the test suite                             |
| `npm run lint`     | Lint the `src/` directory with ESLint          |
| `npm run db:generate` | Generate Drizzle migration files            |
| `npm run db:migrate`  | Apply pending migrations to the database    |
| `npm run db:push`     | Push schema changes directly (no migrations)|
| `npm run db:studio`   | Open Drizzle Studio (visual DB browser)     |

---

## Docker

### Using Docker Compose (recommended for local dev)

Spins up both the app and a local PostgreSQL instance:

```bash
docker compose up --build
```

- App: `http://localhost:3000`
- PostgreSQL: `localhost:5432` (user: `postgres`, password: `postgres`, db: `vidya_kawach`)

### Build & run the app image only

```bash
docker build -t vidya-kawach .
docker run -p 3000:3000 --env-file .env vidya-kawach
```

---

## Domain Modules

| Module                    | Description                                                        |
|---------------------------|--------------------------------------------------------------------|
| **Identity & Access**     | Schools, users, students, classes, roles, guardians, CSV imports   |
| **Academics**             | Attendance records, exams, mark entries, report cards, notices     |
| **Fee Payments**          | Fee heads, invoices, invoice items, payments, receipts, events     |
| **Health Service**        | Hospitals, checkup bookings, teleconsults, diagnostic reports, notifications |
| **Insurance**             | Plans, enrolments, claims, claim documents, e-cards, consents      |
| **Learnings**             | Games, olympiads, AI interactions, knowledge-base entries, scholarships |

---

## Environment Variables

| Variable       | Required | Default       | Description                          |
|----------------|----------|---------------|--------------------------------------|
| `PORT`         | No       | `5000`        | Port the HTTP server listens on      |
| `NODE_ENV`     | No       | `development` | Runtime environment                  |
| `DATABASE_URL` | **Yes**  | —             | PostgreSQL connection string         |

---

## License

ISC
