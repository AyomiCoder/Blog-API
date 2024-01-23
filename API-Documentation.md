
# Blog API Documentation

## Introduction
This API allows you to perform CRUD operations including user authentication, managing blog posts. The API is built using Node.js and Express, with data stored in a MongoDB database.

**Base URL**
The base URL for the API is https://blog-h0gxnqryz-ayomicoder.vercel.app/ by default.

**Hosted url might not work as intended, you can test locally**

**Authentication**
To access certain endpoints, user authentication is required. Authentication is done using JSON Web Tokens (JWT). To authenticate, include the JWT token in the Authorization header of your requests.

## Register User
**Endpoint:** `/auth/register`  
**Method:** `POST`  
**Request Body:**
```json
{
  "username": "your_username",
  "password": "your_password"
}
```
**Description:** Register a new user with a unique username and password.

**Expected Outcome:**
```json
{
  "user": {
    "username": "username",
    "password": "password hash",
    "_id": "user id",
    "__v": 0
  }
}
```

## Login User
**Endpoint:** `/auth/login`  
**Method:** `POST`  
**Request Body:**
```json
{
  "username": "your_username",
  "password": "your_password"
}
```
**Description:** Log in an existing user and obtain a JWT token for authentication.

**Expected Outcome:**
```json
{
  "token": "jwt token"
}
```

## Blog Post Management
### Create Blog Post
**Endpoint:** `/api/posts`  
**Method:** `POST`  
**Request Body:**
```json
{
  "title": "Your Blog Post Title",
  "content": "Your Blog Post Content"
}
```
**Authentication:** Required  
**Description:** Create a new blog post with a title and content.

**Expected Outcome:**
```json
{
  "title": "Your Blog Post Title",
  "content": "Your Blog Post Content",
  "author": "author key id",
  "_id": "post id",
  "timestamp": "post timestamp",
  "__v": 0
}
```

### Get All Blog Posts
**Endpoint:** `/api/posts`  
**Method:** `GET`  
**Authentication:** Not Required  
**Description:** Get a list of all blog posts.

**Expected Outcome:**
```json
[
  {
    "title": "Blog Post 1",
    "content": "Content of Blog Post 1",
    "author": "author key identifier",
    "_id": "post_id_1",
    "timestamp": "post_timestamp_1"
  },
  {
    "title": "Blog Post 2",
    "content": "Content of Blog Post 2",
    "author": "author key id",
    "_id": "post_id_2",
    "timestamp": "post_timestamp_2"
  }
]
```

### Get Single Blog Post by ID
**Endpoint:** `/api/posts/:id`  
**Method:** `GET`  
**Authentication:** Not Required  
**Description:** Get a single blog post by providing its ID.

**Expected Outcome:**
```json
{
  "_id": "post id",
  "title": "Blog title",
  "content": "your blog content",
  "author": {
    "_id": "author key id",
    "username": "username"
  },
  "timestamp": "post timestamp",
  "__v": 0
}
```

### Update Blog Post
**Endpoint:** `/api/posts/:id`  
**Method:** `PUT`  
**Request Body:**
```json
{
  "title": "Updated Blog Post Title",
  "content": "Updated Blog Post Content"
}
```
**Authentication:** Required  
**Description:** Update an existing blog post by providing its ID.

**Expected Outcome:**
```json
{
  "_id": "post id",
  "title": "updated blog title",
  "content": "updated blog content",
  "author": "author key id",
  "timestamp": "post timestamp",
  "__v": 0
}
```

### Delete Blog Post
**Endpoint:** `/api/posts/:id`  
**Method:** `DELETE`  
**Authentication:** Required  
**Description:** Delete an existing blog post by providing its ID.

**Expected Outcome:**
```json
{
  "message": "Post deleted successfully",
}
```

## Error Responses
In case of an error, the API returns appropriate HTTP status codes along with error messages.

- **400 Bad Request:** Invalid request parameters or missing required fields.
- **401 Unauthorized:** Authentication failed or user does not have permission.
- **403 Forbidden:** User lacks permission to access the resource.
- **404 Not Found:** The requested resource (user or blog post) was not found.
- **500 Internal Server Error:** Something went wrong on the server. Check the server logs for details.

## Conclusion
This documentation provides a comprehensive guide to the Blog API endpoints, their methods, the expected request, and response structures.
```
