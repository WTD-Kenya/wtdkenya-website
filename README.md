# Write the Docs Kenya Website

A modern web platform for the Write the Docs Kenya community, featuring event highlights, blog posts, community resources, and more.  
This project includes a React (Vite) frontend and a Django backend.

---

## Table of Contents

- [Write the Docs Kenya Website](#write-the-docs-kenya-website)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Frontend Setup](#frontend-setup)
    - [Backend Setup](#backend-setup)
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
- **Backend:** Django, PostgreSQL, Drizzle ORM
- **Other:** Hashnode API, Meetup API, Cloudinary, Zod, Express (for API proxy/server)

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Python 3.11+
- PostgreSQL

---

### Frontend Setup

```bash
cd client
npm install
npm run dev
```
- The app will be available at `http://localhost:4000` (or as specified by Vite).

---

### Backend Setup

1. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
   Or, if using Poetry:
   ```bash
   poetry install
   ```

2. **Set up environment variables:**  
   Create a `.env` file in the root with your database and API keys (see `writethedocs_ke/settings.py` for required variables).

3. **Run migrations:**
   ```bash
   python manage.py migrate
   ```

4. **Start the backend:**
   ```bash
   python manage.py runserver
   ```
   The backend will run at `http://localhost:8000` by default.

---

## Project Structure

```
WriteDocsKenya/
  client/           # React frontend (Vite, TypeScript)
    src/
      public/       # Static files (e.g., markdown files)
      components/   # UI and layout components
      data/         # Static/sample data (e.g., sampleBlogs.json)
      hooks/        # Custom React hooks
      pages/        # App pages (Home, Blog, Events, etc.)
      lib/          # Types, utilities, query client
  server/           # Express/Node server (API proxy, etc.)
  writethedocs_ke/  # Django backend
  shared/           # Shared schema/types
```

---

## Development Scripts

From the project root:

- `npm run dev` (in `client/`): Start the frontend in development mode
- `python manage.py runserver`: Start the Django backend
- `npm run build` (in `client/`): Build the frontend for production
- `npm run db:push`: Push Drizzle ORM migrations

---

## Contributing

Contributions are welcome!

For detailed guidelines, please see our [CONTRIBUTING.md](/client/public/md/CONTRIBUTING.md) file.

---

## License

This project is licensed under the MIT License.