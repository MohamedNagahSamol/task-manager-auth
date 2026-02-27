Task Manager API with Authentication & Authorization

📌 Overview

This project is a RESTful API built with Node.js, Express, MongoDB, and Mongoose that allows users to manage tasks securely.
It includes a complete authentication system, role-based authorization, and CRUD operations for tasks.

---

🚀 Features

- User Registration & Login (JWT Authentication)
- Role-Based Access Control (RBAC)
- Create, Read, Update, Delete Tasks
- Secure Password Hashing
- Protected Routes
- Input Validation
- Global Error Handling
- Pagination & Sorting
- Search with Database Indexing

---

🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- dotenv

---

📂 Project Structure

project
│── controllers
│── middlewares
│── models
│── routes
│── utils
│── config
│── app.js
│── server.js

---

⚙️ Installation

git clone https://github.com/your-username/task-manager-api.git
cd task-manager-api
npm install

Create ".env" file:

PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key

Run server:

npm run dev

---

🔐 Authentication

Protected routes require a token in headers:

Authorization: Bearer YOUR_TOKEN

---

👤 Roles

Role| Permissions
user| Manage own tasks
admin| Manage all tasks + users

---

📬 API Endpoints

Auth

- POST "/api/auth/register"
- POST "/api/auth/login"

Tasks

- GET "/api/tasks"
- POST "/api/tasks"
- PUT "/api/tasks/:id"
- DELETE "/api/tasks/:id"

---

📈 Future Improvements

- Email verification
- Refresh tokens
- Rate limiting
- Swagger documentation
- Unit testing

---

👨‍💻 Author

Developed as a backend practice project to demonstrate:

- Clean Architecture
- Secure APIs
- Scalable Structure

---

📄 License

MIT License
