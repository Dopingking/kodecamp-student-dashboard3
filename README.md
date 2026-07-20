# KodeCamp 6.0 — Stage 4: Student Enrollment Portal with Routing

This React application extends the student enrollment portal with client-side routing using React Router.

## What changed
- Added a shared `Navbar` with `NavLink` navigation for Home and Enroll.
- Added route-based pages for the roster, student detail view, enroll form, and a 404 page.
- Enabled navigation from student cards to `/students/:id` with `Link`.
- Kept roster state in `App.jsx` so enrollments appear immediately on the home page.

## Features
- Fetches student roster from the Random User API.
- Allows enrolling a new student and redirects back to the home page.
- Shows student detail pages using route params.
- Includes a friendly 404 page for unknown routes.

## Setup & Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
