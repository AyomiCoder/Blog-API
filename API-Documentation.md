

# Blog API Documentation

## Introduction

This API allows you to perform various operations on a blogging platform, including user authentication, managing blog posts, and retrieving individual posts by their IDs. The API is built using Node.js and Express, with data stored in a MongoDB database.

## Base URL

The base URL for the API is `https://blog-h0gxnqryz-ayomicoder.vercel.app/` by default.


## Authentication

To access certain endpoints, user authentication is required. Authentication is done using JSON Web Tokens (JWT). To authenticate, include the JWT token in the `Authorization` header of your requests.

### Register User

- **Endpoint:** `/auth/register`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
  ```
- **Description:** Register a new user with a unique username and password.

### Login User

- **Endpoint:** `/auth/login`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
  ```
- **Description:** Log in an existing user and obtain a JWT token for authentication.

## Blog Post Management

### Create Blog Post

- **Endpoint:** `/api/posts`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "title": "Your Blog Post Title",
    "content": "Your Blog Post Content"
  }
  ```
- **Authentication:** Required
- **Description:** Create a new blog post with a title and content.

### Get All Blog Posts

- **Endpoint:** `/api/posts`
- **Method:** `GET`
- **Authentication:** Not Required
- **Description:** Get a list of all blog posts.

### Get Single Blog Post by ID

- **Endpoint:** `/api/posts/:id`
- **Method:** `GET`
- **Authentication:** Not Required
- **Description:** Get a single blog post by providing its ID.

### Update Blog Post

- **Endpoint:** `/api/posts/:id`
- **Method:** `PUT`
- **Request Body:**
  ```json
  {
    "title": "Updated Blog Post Title",
    "content": "Updated Blog Post Content"
  }
  ```
- **Authentication:** Required
- **Description:** Update an existing blog post by providing its ID.

### Delete Blog Post

- **Endpoint:** `/api/posts/:id`
- **Method:** `DELETE`
- **Authentication:** Required
- **Description:** Delete an existing blog post by providing its ID.

## Error Responses

In case of an error, the API returns appropriate HTTP status codes along with error messages.

- **400 Bad Request:** Invalid request parameters or missing required fields.
- **401 Unauthorized:** Authentication failed or user does not have permission.
- **403 Forbidden:** User lacks permission to access the resource.
- **404 Not Found:** The requested resource (user or blog post) was not found.
- **500 Internal Server Error:** Something went wrong on the server. Check the server logs for details.

## Conclusion

This documentation provides a comprehensive guide to the Blog API endpoints, their methods, and the expected request and response structures.