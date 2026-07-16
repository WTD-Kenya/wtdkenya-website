# Write the Docs Kenya Website

A modern web platform for the Write the Docs Kenya community, featuring event highlights, blog posts, community resources, and more.  
This project is a single Node.js app: a React (Vite) frontend served together with an Express API (Meetup/Hashnode/Cloudinary proxy).

---

## Table of Contents

- [Write the Docs Kenya Website](#write-the-docs-kenya-website)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
  - [Project Structure](#project-structure)
  - [Development Scripts](#development-scripts)
  - [Contributing](#contributing)
  - [License](#license)

---

## Features

- 📰 Blog feed with live and sample posts
- 📅 Event highlights and previous conferences
- 👥 Community and partner sections
- ✉️ Contact and FAQ
- 🧑‍💻 Modern, responsive UI with Tailwind CSS
- 🔗 Integration with Hashnode and Meetup APIs

---

## Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS, Radix UI, React Query
- **Backend:** Express (Node.js) — API proxy for Meetup/Hashnode/Cloudinary, Drizzle ORM + PostgreSQL for contact form submissions
- **Other:** Hashnode API, Meetup API, Cloudinary, Zod

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- PostgreSQL (optional — only needed if you want contact form submissions to persist; the app runs fine without it)

---

### Setup

```bash
npm install
npm run dev
```
- This starts a single server (Express + Vite middleware) serving both the frontend and the `/api/*` routes.
- Defaults to `http://localhost:5050` (macOS reserves port 5000 for ControlCenter/AirPlay). Override with `PORT=xxxx npm run dev`.
- To enable live Meetup events, blog posts, or gallery images, create a `.env` file in the project root with `MEETUP_API_KEY`, `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET`. Without it, those sections gracefully fall back to sample content.
- To enable contact form persistence, also set `DATABASE_URL` (a Postgres/Neon connection string) and run `npm run db:push`.

For production:
```bash
npm run build   # builds the frontend (dist/public) and bundles the server (dist/index.js)
npm start        # runs the production server
```

---

## Project Structure

```
wtdkenya-website/
  client/           # React frontend (Vite, TypeScript)
    src/
      public/       # Static files (e.g., markdown files)
      components/   # UI and layout components
      data/         # Static/sample data (e.g., sampleBlogs.json)
      hooks/        # Custom React hooks
      pages/        # App pages (Home, Blog, Events, etc.)
      lib/          # Types, utilities, query client
  server/           # Express server (API proxy, Vite integration)
  shared/           # Shared schema/types
```

---

## Development Scripts

From the project root:

- `npm run dev`: Start the app (frontend + API) in development mode
- `npm run build`: Build the frontend and bundle the server for production
- `npm start`: Run the production build
- `npm run check`: Type-check the project
- `npm run db:push`: Push Drizzle ORM migrations (requires `DATABASE_URL`)

---

## Contributing

Contributions are welcome!

For detailed guidelines, please see our [CONTRIBUTING.md](/client/public/md/CONTRIBUTING.md) file.

---

## License

This project is licensed under the MIT License.