# EduCourse REST API Project

This is a simple REST API project for managing course data (CRUD - Create, Read, Update, Delete).

---

## 🚀 Key Features

This API allows a client to perform the following operations on course data:

* **Create:** Add a new course to the database.
* **Read:** Get a list of all courses or a single course by its ID.
* **Update:** Update an existing course's information by its ID.
* **Delete:** Remove a course from the database by its ID.

---

## 🛠️ Tech Stack

This project was built using the following technologies:

* **Node.js:** As the server-side JavaScript runtime environment.
* **Express.js:** As the framework for building the API and managing routes.
* **MySQL (via `mysql2`):** As the database for storing course data.
* **Dotenv:** For managing environment variables (e.g., database credentials).
* **Postman:** Used for testing all API endpoints.

---

## 🚀 Getting Started

### 1. Prerequisites

* Node.js (v16 or later)
* NPM
* A MySQL database (e.g., XAMPP / phpMyAdmin)

### 2. Installation & Setup

1.  **Clone this repository:**
    ```bash
    git clone [https://github.com/irfanari969/edu-course-api.git](https://github.com/irfanari969/edu-course-api.git)
    cd edu-course-api
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up the Database:**
    * Open phpMyAdmin and create a new database (e.g., `database_edu`).
    * Import the `src/sql/database_edu.sql` file into your new database. This will create all necessary tables.

4.  **Create your `.env` file:**
    * Create a file named `.env` in the project's root directory.
    * Copy and paste the content below into it, then fill in your local settings.

    ```.env.example
    # Database (Adjust to your XAMPP settings)
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=
    DB_PORT=3306
    DB_NAME=database_edu

    # JSON Web Token (Create your own long, secret string)
    JWT_SECRET=this_is_my_very_long_jwt_secret

    # Email (Use your Ethereal test account)
    EMAIL_HOST=smtp.ethereal.email
    EMAIL_PORT=587
    EMAIL_USER=username@ethereal.email
    EMAIL_PASS=etherealpassword
    ```

5.  **Run the Server:**
    ```bash
    npm run dev
    ```
    The server will start on `http://localhost:3000`.

---

## 🏛️ Architecture

This project uses a simple **Model-Controller** architecture to separate concerns:

* **`config/`**: Contains the database connection file (using a connection pool).
* **`models/`**: Contains all SQL query logic (DML) for direct database interaction (SELECT, INSERT, UPDATE, DELETE).
* **`controllers/`**: Contains the business logic (the "middleman") that receives client requests and calls the appropriate model.
* **`routes/`**: Defines the API endpoints (URLs) and maps them to the relevant controller functions.

---

## 📖 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/courses` | Adds a new course. |
| `GET` | `/courses` |Retrieves all courses. |
| `GET` | `/courses/:id` | Retrieves a single course by ID. |
| `PATCH`| `/courses/:id` | Updates an existing course by ID. |
| `DELETE`| `/courses/:id` | Deletes a course by ID. |
