# Recipes-app-api

A simple API with CRUD functionality using Node.js, Express.js, and MongoDB.

## Description

Develop a complete CRUD (Create, Read, Update, Delete) application for managing recipes using Node.js, Express.js, and Mongoose. The application followed by MVC pattern.

### important commands

1. `npm install`
2. `npm run server`
3. `git init`
4. `git add .`
5. `git commit -m "msg"`
6. `git push -u orgin main` or` git push`

### CRUD Operations in Recipes App API

1. Create a Recipe (POST request)

   `POST /recipes` - Adds a new recipe to the database.

2. Read All Recipes (GET request)

   `GET /recipes` - Fetches all recipes from the database.

3. Read a Single Recipe (GET request)

   `GET /recipes/:id` - Fetches a specific recipe using its ID.

4. Update a Recipe (PUT request)

   `PUT /recipes/:id` - Updates an existing recipe based on its ID.

5. Delete a Recipe (DELETE request)

   `DELETE /recipes/:id` - Deletes a recipe from the database using its ID.

## Conclusion

This API allows users to manage their recipe collection using CRUD operations. The API is built using Node.js, Express.js, and MongoDB, ensuring a lightweight and efficient backend service.
