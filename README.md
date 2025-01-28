# Ecommerce App

This is a simple ecommerce application built with ReactJS that allows users to browse products and manage a shopping cart. The application fetches product data from the Fake Store API and provides a user-friendly interface for adding and removing items from the cart.

## Features

- Fetches a list of products from the Fake Store API.
- Displays products in a responsive layout with key information (image, title, price, description).
- Allows users to add products to the cart.
- Displays the cart with the ability to increase/decrease item quantities and remove items.
- Calculates total price for items in the cart, applying a 10% discount on the total.
- Implements routing to navigate between the product page and the cart page.

## Tech Stack

- ReactJS
- React Router
- Tailwind CSS for styling
- JavaScript for functionality

## Project Structure

```
ecommerce-app
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── CartItem.js
│   │   ├── Navbar.js
│   │   ├── ProductCard.js
│   │   └── ProductList.js
│   ├── pages
│   │   ├── CartPage.js
│   │   └── ProductPage.js
│   ├── App.js
│   ├── index.js
│   ├── routes.js
│   ├── services
│   │   └── api.js
│   ├── styles
│   │   ├── index.css
│   │   └── tailwind.css
│   └── utils
│       └── helpers.js
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd ecommerce-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## License

This project is licensed under the MIT License.