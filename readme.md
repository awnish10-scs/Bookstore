# Online Bookstore API Documentation

## Overview

This is a RESTful API for an online bookstore application. The API allows users to manage users, books, shopping carts, and orders.

---

## User Management

### 1. Create User
- **URL**: `/api/users`
- **Method**: `POST`
- **Description**: Create a new user in the system.
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }

3. Add details for each endpoint, covering **User**, **Book**, **Cart**, and **Order** management.

4. Commit the `README.md` file to your Git repository, and this will serve as your API documentation.

---

### 2. **Using Swagger (Optional)**

If you want to generate more interactive documentation, you can use **Swagger**. Swagger is a tool for generating dynamic API documentation that can also be used to test endpoints.

#### Steps:
1. Install Swagger dependencies:
   ```bash
   npm install swagger-jsdoc swagger-ui-express
