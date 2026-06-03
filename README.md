# Project Setup

## 🚀 Quick Setup (Recommended)

### Windows (PowerShell)

Run the setup script:

```powershell
.\setup.ps1
```

### Linux / macOS / Git Bash

./setup.sh

## 🛠️ Manual Setup

<details>
<summary><strong>Step 1: Install Dependencies</strong></summary>

```bash
pnpm install
```

</details>

<details>
<summary><strong>Step 2: Configure Environment Variables</strong></summary>

Navigate to the backend-common package:

```bash
cd packages/backend-common
```

Create a `.env` file and copy all values from:

```bash
.env.example
```

Update the values as needed.

</details>

<details>
<summary><strong>Step 3: Generate Prisma Client</strong></summary>

```bash
cd packages/db
npx prisma generate
```

</details>

<details>
<summary><strong>Step 4: Start PostgreSQL</strong></summary>

```bash
docker compose up -d
```

</details>

<details>
<summary><strong>Step 5: Run Database Migrations</strong></summary>

```bash
npx prisma migrate dev
```

</details>

<details>
<summary><strong>Step 6: Start Development Servers</strong></summary>

From the project root:

```bash
pnpm dev
```

</details>

---

## 🔧 Troubleshooting

<details>
<summary><strong>Prisma Client Not Generated</strong></summary>

```bash
cd packages/db
npx prisma generate
```

</details>

<details>
<summary><strong>Database Connection Issues</strong></summary>

Verify Docker is running:

```bash
docker ps
```

Start the database if needed:

```bash
docker compose up -d
```

</details>

<details>
<summary><strong>Migration Errors</strong></summary>

```bash
npx prisma migrate reset
npx prisma migrate dev
```

</details>
strong>Migration Errors</strong></summary>

```bash
npx prisma migrate reset
npx prisma migrate dev
```

</details>
# video_pre_processing
# video_pre_processing
