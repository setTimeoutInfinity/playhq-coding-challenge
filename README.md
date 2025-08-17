# Game Centre Management System

A full-stack application for managing sports events and tournaments, built with React, TypeScript, and Node.js.

## 🎯 Overview

The Game Centre Management System provides a simple interface for viewing and managing sports events. It features a React frontend for displaying events and a Node.js backend API for data management.

## 🛠️ Tech Stack

### Frontend
- **Vite** - Build tool for fast development
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Sass** - CSS preprocessor for styling

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **TypeScript** - Type safety for server code
- **CORS** - Cross-origin resource sharing

## 📋 Features

- View list of sports events
- Sort events alphabetically or by date
- Add new events
- Refresh event list
- Status badges for event states (active, inactive, pending)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd playhq-coding-challenge
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

### Running the Application

You'll need two terminal windows to run both the backend and frontend servers.

#### Terminal 1: Start the Backend Server

```bash
cd backend
npm run dev
```

The backend will start on `http://localhost:3001`

#### Terminal 2: Start the Frontend Development Server

```bash
cd frontend
npm run dev
```

The frontend will start on `http://localhost:5173`

Open your browser and navigate to `http://localhost:5173` to view the application.

## 🧪 Running Tests

### Backend Tests

```bash
cd backend
npm test
```

### Frontend Tests

```bash
cd frontend
npm test
```

## 📁 Project Structure

```
playhq-coding-challenge/
├── backend/
│   ├── src/
│   │   ├── index.ts        # Express server setup
│   │   ├── data.ts         # Mock data
│   │   └── data.test.ts    # Data tests
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── ItemList.tsx
│   │   │   └── Controls.tsx
│   │   ├── App.tsx         # Main application component
│   │   ├── main.tsx        # Application entry point
│   │   └── styles.scss     # Global styles
│   ├── package.json
│   └── vite.config.ts
│
└── README.md
```

## 🔌 API Endpoints

### GET /api/items
Retrieve all events.

**Query Parameters:**
- `sort` (optional): Sort order ('alpha' for alphabetical, 'date' for date sorting)

### POST /api/items
Add a new event.

**Request Body:**
```json
{
  "name": "Event Name",
  "date": "2024-03-15",
  "status": "active",
  "description": "Event description"
}
```

### GET /health
Health check endpoint.

## 🏗️ Building for Production

### Backend

```bash
cd backend
npm run build
npm start
```

### Frontend

```bash
cd frontend
npm run build
```

The built files will be in the `frontend/dist` directory.

## 🔧 Development Scripts

### Backend
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm test` - Run tests

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## 📝 Notes

- The backend server must be running for the frontend to fetch data
- Mock data is pre-populated in the backend
- The application uses local state management
- CORS is configured to allow frontend-backend communication

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is part of a technical assessment.
