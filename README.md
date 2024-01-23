#To run and test the API locally on your machine

### Prerequisites:

1. **Node.js and npm:**
   Ensure that you have Node.js and npm (Node Package Manager) installed on your machine

2. **Mongo DB:*
Create a free database cluster on Mongo DB Atlas and obtain your Connection string.

### Set Up the Blog API:

1. **Clone the Repository:**
   Open a terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/username/blog-api.git
   ```

2. **Navigate to the Project Directory:**
   Change into the project directory:

   ```bash
   cd blog-api
   ```

3. **Install Dependencies:**
   Install the project dependencies using npm:

   ```bash
   npm install
   ```

4. **Create .env File:**
   Create a `.env` file in the root of the project and add the following content:

   ```env
   SECRET_KEY=your-secret-key
   MONGODB_URI=mongodb://localhost/blog-api
   ```

   Replace `your-secret-key` with a strong and random secret key and also add your Mongo db URI or you can use mongo DB compass if you want to run it on local host.


5. **Start the Blog API Server:**
   Start the Node.js server by running:

   ```bash
   npm run dev
   ```

   This will start the server at `http://localhost:4040`.
you can set your port.

### Test the API Endpoints:

1. **Register a User:**
   Use an API testing tool like ThunderClient, Postman, or `curl` to send a `POST` request to `http://localhost:4040/auth/register` with the following JSON body:

   ```json
   {
     "username": "your-username",
     "password": "your-password"
   }
   ```

   Replace `your-username` and `your-password` with your desired credentials.

2. **Login to Obtain JWT Token:**
   Send a `POST` request to `http://localhost:4040/auth/login` with the same credentials used for registration. 

Retrieve the JWT token from the response header, copy it and save it somewhere.

3. **Create a Blog Post:**
   Send a `POST` request to `http://localhost:4040/api/posts` with the following JSON body:

   ```json
   {
     "title": "Your Blog Post Title",
     "content": "Your Blog Post Content"
   }
   ```

   Include the JWT token in the `Authorization` header before creating a new post. if you are using thunder client, click on header and add 'Authorization' in the key section and paste the jwt token you copied ealier in the value section. Now you can make a POST request to this endpoint.

4. **Get All Blog Posts:**
   Send a `GET` request to `http://localhost:4040/api/posts` to retrieve a list of all blog posts.

5. **Get a Single Blog Post by ID:**
   Retrieve the ID of a blog post from the list and send a `GET` request to `http://localhost:4040/api/posts/:id` (replace `:id` with the actual post ID).

6. **Update a Blog Post:**
   Send a `PUT` request to `http://localhost:4040/api/posts/:id` with the updated content in the JSON body. Include the JWT token in the `Authorization` header.

7. **Delete a Blog Post:**
   Send a `DELETE` request to `http://localhost:4040/api/posts/:id` to delete a blog post. Include the JWT token in the `Authorization` header.

### Conclusion:

 You can Use an API testing tool of your choice to interact with the different endpoints and explore the functionality of the API.




