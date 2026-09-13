# Secure Student Management System
## REST API Documentation

Base URL:

http://127.0.0.1:5000

---

## Authentication

The API uses JWT Bearer Token authentication.

After successful login, the server returns an access token.

Protected requests must include:

Authorization: Bearer <access_token>

JWT token expiry: 1 hour

---

# 1. Authentication APIs

## Register User

POST /api/auth/register

### Request

```json
{
    "username": "student02",
    "email": "student02@example.com",
    "password": "Student@123"
}