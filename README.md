# Install

Use `npm i` to install the dependencies in the project.

# Run

Use the `npm run start` to run the app in development mode.

# Tech Stack Used

- Express
- CORS
- Nodemon

# API URL & Port

```
http://127.0.0.1:8080
```

# Main API Endpoints

```
/products
/getCart
/getDiscounts
/addProductToCart
/cartCheckout
/validateDiscount
```

# Admin API Endpoints

```
/getAdminStoreDetails
/generateDiscount
```

# Principle

The application has an Express server with CORS and JSON data encoding middleware running on the port 8080.

The Express app uses a router to facilitate the GET, POST routes.

The app also has a controllers file which segregates the route endpoints with route handlers, keeping the data segregated.

To generate fake product data, I have used the API endpoint from Dummy Json `/products` to fetch the data and consume what was specifically required for the app.

The app has a utils folder to fetch dummy products and a few other utility functions used in the application.
