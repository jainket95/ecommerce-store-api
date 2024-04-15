# Install
Use `npm i` to install the dependencies in the project.

# Run
Use the below command to run the app locally:


# Principle
The application has an Express server with CORS and JSON data encoding middleware running on the port 8080.

The Express app uses a router to facilitate the GET, POST routes.

The app also has a controllers file which segregates the route endpoints with route handlers, keeping the data segregated.

To generate fake product data, I have used the API endpoint from Dummy Json `/products` to fetch the data and consume what was specifically required for the app.

The app has a utils folder to fetch dummy products and a few other utility functions used in the application.
