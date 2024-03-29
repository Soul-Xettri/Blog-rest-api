# Blog REST API with Express (2020)

<p align="center">
  Welcome to the Blog REST API with Express! This project provides a basic foundation for building a RESTful API for managing blog content using Express.js.
</p>

## Introduction

The Blog REST API is a lightweight backend solution designed for creating, retrieving, updating, and deleting blog posts. Built with Express.js, it offers a straightforward API for interacting with a blog database.

## Features

- **Express.js Framework:** Utilizes the popular Express.js framework for building scalable and efficient APIs.
- **RESTful Endpoints:** Implements RESTful API endpoints for managing blog posts.
- **CRUD Operations:** Supports Create, Read, Update, and Delete operations for blog posts.
- **Design:** A minimalist API design focused on essential blog functionality.

## Getting Started

To set up and run the Blog REST API, follow these steps:

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/soul-xettri/simple-blog-rest-api.git
    cd blog-rest-api
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Database Setup:**
    - Configure your database settings in the `.env` file.
    - Ensure your database is running and accessible.

4. **Run the Application:**
    ```bash
    npm start
    ```

5. **API Endpoints:**

    - **Get All Posts:**
      - Endpoint: `GET /posts`

    - **Get Post by ID:**
      - Endpoint: `GET /posts/:id`

    - **Create a New Post:**
      - Endpoint: `POST /posts`
      - Request Body:
        ```json
        {
          "title": "New Blog Post",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
        ```

    - **Update Post by ID:**
      - Endpoint: `PUT /posts/:id`
      - Request Body:
        ```json
        {
          "title": "Updated Blog Post",
          "content": "Updated content goes here."
        }
        ```

    - **Delete Post by ID:**
      - Endpoint: `DELETE /posts/:id`

6. **Testing:**
    - Use tools like Postman or curl to test the API endpoints.

## Database Schema

The project relies on a database to store blog posts. Refer to the database schema in the `schema.sql` file for more details.

## Contributing

Contributions are welcome! If you have suggestions for improvement, find bugs, or want to contribute new features, please submit a pull request or open an issue.

## License

This project is licensed under the MIT License.

Feel free to customize and extend the Blog REST API to meet your specific requirements. Happy coding! 🚀📝
