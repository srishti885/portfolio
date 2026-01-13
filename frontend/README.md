Portfolio Website
This is a full-stack portfolio application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It includes a dynamic project showcase and a functional contact form with email notifications.

Project Structure
The repository is divided into two main directories:

frontend/: Contains the React.js application and UI components.

backend/: Contains the Node.js server, API routes, and database models.

Features
Dynamic Project Section: Fetches project data directly from MongoDB.

Contact Form: Allows visitors to send messages which are saved in the database and sent via email using Nodemailer.

Responsive Design: Optimized for various screen sizes using CSS/Tailwind.

REST API: Structured backend with clear endpoints for projects and messages.

Tech Stack
Frontend: React.js, Axios, CSS/Tailwind

Backend: Node.js, Express.js

Database: MongoDB (Atlas)

Email Service: Nodemailer

Environment Variables: Managed using dotenv

Installation and Setup
1. Clone the repository
Bash

git clone https://github.com/srishti885/portfolio.git
cd portfolio
2. Backend Setup
Navigate to the backend folder: cd backend

Install dependencies: npm install

Create a .env file and add the following:

MONGO_URI: Your MongoDB connection string

EMAIL_USER: Your Gmail address

EMAIL_PASS: Your Gmail App Password

PORT: 5000

Start the server: node server.js

3. Frontend Setup
Navigate to the frontend folder: cd ../frontend

Install dependencies: npm install

Start the React app: npm start

API Endpoints
GET /api/projects: Fetches all projects from the database.

POST /api/contact/send: Sends a message and saves it to the database.

