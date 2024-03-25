# Coffee Shop Backend

Welcome to the Coffee Shop Backend Web Project! This repository contains the back-end source code for the Coffee Shop web application. Leveraging the capabilities of Node.js and Express.js and structured with a modular architecture, to develop a powerful and efficient backend.

Find various choices ranging from coffee, food and non-coffee. then Order your favorite product easily and enjoy the best coffee drinking experience at home.

## Features

- Explore a wide range of products.
- Read the complete product description to help you choose according to your taste.
- Order products easily and safely via a trusted online payment system.
- Get lots of attractive promos and offers.
- Monitor your order status easily.

Build using

![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

## 📌 Getting Started

To run the project locally, follow these steps:

1. Clone this repository
```sh
  git clone https://github.com/wisnu31899/fwg17-backend-beginner.git
  cd fwg17-backend-beginner
```

2. Open in VSCode
```sh
  code .
```

3. Install all the dependencies
```sh
  npm install
```

4. Run the project
```sh
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT= `

`DATABASE_URL= `

`APP_SECRET= `

## API Reference

#### Login

```http
  POST auth/login
```
#### Register

```http
  POST auth/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `users` | `GET` | Get a list all of users data |
| `users/:id` | `GET` | Get a detailed user data |
| `users` | `POST` | Insert a user data |
| `users/:id` | `PATCH` | Update a user data |
| `users/:id` | `DELETE` | Delete a user data |
| `products` | `GET` | Get a list all of products data |
| `products/:id` | `GET` | Get a detailed product data |
| `products` | `POST` | Insert a product data |
| `products/:id` | `PATCH` | Update a product data |
| `products/:id` | `DELETE` | Delete a product data |
| `promo` | `GET` | Get a list all of promo data |
| `promo/:id` | `GET` | Get a detailed promo data |
| `promo` | `POST` | Insert a promo data |
| `promo/:id` | `PATCH` | Update a promo data |
| `promo/:id` | `DELETE` | Delete a promo data |
| `product-size` | `GET` | Get a list all of product size data |
| `product-size/:id` | `GET` | Get a detailed product size data |
| `product-size/:id` | `PATCH` | Update a product size data |
| `product-variant` | `GET` | Get a list all of product variant data |
| `product-variant/:id` | `GET` | Get a detailed product variant data |
| `product-variant` | `POST` | Insert a product variant data |
| `product-variant/:id` | `PATCH` | Update a product variant data |
| `product-variant/:id` | `DELETE` | Delete a product variant data |
| `categories` | `GET` | Get a list all of categories data |
| `categories/:id` | `GET` | Get a detailed categories data |
| `categories` | `POST` | Insert a categories data |
| `categories/:id` | `PATCH` | Update a categories data |
| `categories/:id` | `DELETE` | Delete a categories data |
| `tags` | `GET` | Get a list all of tags data |
| `tags/:id` | `GET` | Get a detailed tags data |
| `tags` | `POST` | Insert a tags data |
| `tags/:id` | `PATCH` | Update a tags data |
| `tags/:id` | `DELETE` | Delete a tags data |
| `product-tags` | `GET` | Get a all list of product tags data |
| `product-tags/:id` | `GET` | Get a detailed product tags data |
| `product-tags` | `POST` | Insert a product tags data |
| `product-tags/:id` | `PATCH` | Update a product tags data |
| `product-tags/:id` | `DELETE` | Delete a product tags data |
| `product-categories` | `GET` | Get a all list of product categories data |
| `product-categories/:id` | `GET` | Get a detailed product categories data |
| `product-categories` | `POST` | Insert a product categories data |
| `product-categories/:id` | `PATCH` | Update a product categories data |
| `product-categories/:id` | `DELETE` | Delete a product categories data |
| `product-ratings` | `GET` | Get a list all of product ratings data |
| `product-ratings/:id` | `GET` | Get a detailed product rating data |
| `product-ratings` | `POST` | Insert a product rating data |
| `product-ratings/:id` | `PATCH` | Update a product rating data |
| `product-ratings/:id` | `DELETE` | Delete a product rating data |
| `orders` | `GET` | Get a list all of orders data |
| `orders/:id` | `GET` | Get a detailed order data |
| `orders` | `POST` | Insert a order data |
| `orders/:id` | `PATCH` | Update a order data |
| `orders/:id` | `DELETE` | Delete a order data |
| `order-details` | `GET` | Get a list all of order details data |
| `order-details/:id` | `GET` | Get a detailed order detail data |
| `order-details` | `POST` | Insert a order detail data |
| `order-details/:id` | `PATCH` | Update a order detail data |
| `order-details/:id` | `DELETE` | Delete a order detail data |


## Technologies Used

In building this backend application, we have carefully selected and integrated a variety of advanced technologies to ensure robustness, scalability, and security.

**Node.js**: At the heart of our application lies Node.js, a powerful JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js enables us to execute JavaScript code server-side, providing a lightweight and efficient platform for building scalable network applications.

**Express.js**: Leveraging the capabilities of Node.js, we utilize Express.js, a fast, unopinionated, and minimalist web framework designed for Node.js. Express.js simplifies the process of building web applications and APIs by providing a robust set of features for routing, middleware, and HTTP utilities.

**JSON Web Tokens (JWT)**: To ensure secure authentication and authorization, we employ JSON Web Tokens (JWT). JWT is a compact, URL-safe means of representing claims to be transferred between two parties. By using JWT, we can securely transmit user information between the client and the server, enhancing the security of our application.

**dotenv**: To enhance configurability and portability, we make use of dotenv, a zero-dependency module that loads environment variables from a `.env` file into `process.env`. This allows us to manage configuration settings such as database connection strings, API keys, and environment-specific variables easily.

By integrating these cutting-edge technologies, we have created a backend application that is not only powerful and scalable but also secure and highly adaptable to evolving business needs.

## ✍️ Coffee Shop - Frontend Repository
https://github.com/wisnu31899/fwg17-beginner-frontend.git

## Project Structure

The project structure is organized as follows: 
- src/: contains the source code of the project.
- asset/: image and icon media.
- components/: Reusable component used throughout the project.
- pages/: Individual pages of the application.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open a pull request.

## Authors

- [@wisnu31899](https://github.com/wisnu31899)

## Feedback

If you have any feedback, please reach out to us at wisnuhidayat318@gmail.com
