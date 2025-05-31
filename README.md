# My Next.js App

This is a Next.js 15 application initialized with TypeScript, Tailwind CSS, Prisma, PostgreSQL, and tRPC.

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or later)
- PostgreSQL

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd my-nextjs-app
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Set up your environment variables:

   Copy the `.env.example` file to `.env` and update the values as needed.

4. Set up the database:

   Run the following command to create the database and apply migrations:

   ```
   npx prisma migrate dev
   ```

### Running the Application

To start the development server, run:

```
npm run dev
```

Your application will be running at `http://localhost:3000`.

### Project Structure

- `src/app`: Contains the main application layout and pages.
- `src/components/ui`: Reusable UI components.
- `src/lib`: Contains database and tRPC logic.
- `src/server/api`: API routes and routers.
- `prisma`: Prisma schema and migrations.

### License

This project is licensed under the MIT License. See the LICENSE file for more information.