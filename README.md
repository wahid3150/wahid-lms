# WAHID LMS

A full-stack learning management system where instructors can create and manage courses, and students can browse, purchase, and watch them.

## Overview

This project is split into two apps:

- `client/`: React + Vite frontend
- `server/`: Express + MongoDB backend

Core workflows supported by the project:

- User authentication with JWT
- Instructor dashboard and course creation flow
- Student course browsing and course details pages
- PayPal-based course purchase flow
- Purchased courses list for students
- Course progress tracking
- Cloudinary-based media upload support

## Tech Stack

### Frontend

- React 19
- Vite
- React Router
- Axios
- Tailwind CSS v4
- shadcn/ui components
- Sonner for notifications

### Backend

- Node.js
- Express
- MongoDB with Mongoose
- JWT authentication
- bcryptjs
- Cloudinary
- PayPal REST SDK

## Project Structure

```text
wahid-lms/
|-- client/
|   |-- public/
|   |-- src/
|   |   |-- api/
|   |   |-- components/
|   |   |-- config/
|   |   |-- context/
|   |   |-- pages/
|   |   `-- services/
|   `-- package.json
|-- server/
|   |-- controllers/
|   |-- helpers/
|   |-- middleware/
|   |-- models/
|   |-- routes/
|   |-- .env.example
|   |-- server.js
|   `-- package.json
`-- README.md
```

## Features

### Authentication

- Register and login
- JWT-based protected auth check
- Role-based route behavior for students and instructors

### Instructor

- View instructor dashboard
- Open the courses tab
- Create a new course
- Edit existing course details
- Upload media for course content

### Student

- Browse available courses
- View course details
- Buy courses using PayPal
- Access purchased courses
- Watch course content
- Track progress per course

## Environment Variables

Create a `server/.env` file using [server/.env.example](/c:/Users/wahid/Desktop/wahid-lms/server/.env.example).

Example:

```env
PORT=5000
CLIENT_URL=http://localhost:5173
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_SECRET_ID=your_paypal_secret
```

Important:

- `CLIENT_URL` should be `http://localhost:5173` without a trailing slash
- do not commit your real `.env` file

## Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd wahid-lms
```

### 2. Install frontend dependencies

```bash
cd client
npm install
```

### 3. Install backend dependencies

```bash
cd ../server
npm install
```

## Running the Project

### Start the backend

```bash
cd server
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

### Start the frontend

```bash
cd client
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

## Main Frontend Routes

- `/auth`
- `/home`
- `/courses`
- `/course/details/:id`
- `/student-courses`
- `/course-progress/:id`
- `/instructor`
- `/instructor/create-new-course`
- `/instructor/edit-course/:courseId`

## Main Backend Routes

### Auth

- `POST /auth/register`
- `POST /auth/login`
- `GET /auth/check-auth`

### Instructor

- `POST /instructor/course/add`
- `GET /instructor/course/get`
- `GET /instructor/course/get/details/:id`
- `PUT /instructor/course/update/:id`

### Student

- `GET /student/courses/get`
- `GET /student/courses/get/details/:id`
- `GET /student/courses/purchase-info/:id/:studentId`
- `POST /student/order/create`
- `POST /student/order/capture`
- `GET /student/courses-bought/get/:studentId`
- `GET /student/course-progress/get/:userId/:courseId`
- `POST /student/course-progress/mark-lecture-viewed`
- `POST /student/course-progress/reset-progress`

## Important Notes

- The client signup flow currently registers users with the `user` role by default.
- To access instructor pages, log in with an account that already has the `instructor` role in MongoDB.
- If a student has not purchased any course yet, the student courses page should return an empty list.
- Public assets in Vite should be used by URL, for example `/banner-img.png`.

## Scripts

### Client

- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run lint`

### Server

- `npm run dev`

## Future Improvements

- Add backend auth protection to instructor-only APIs
- Add role selection or admin-created instructor onboarding
- Improve course deletion flow
- Add tests for auth, purchases, and course progress
- Add deployment documentation

## License

This project is currently for personal/portfolio use unless you define a separate license.
