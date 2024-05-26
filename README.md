# Rentify

Rentify is a comprehensive real estate management platform designed to streamline the process of renting and finding rental properties. Whether you're a property owner looking to list your properties or a tenant searching for the perfect rental, Rentify provides the tools and features to simplify the entire rental process.

## Features

- **User Authentication**: Secure user authentication system for property owners and tenants.
- **Property Management**: Property owners can easily list and manage their rental properties, including detailed property descriptions and amenities.
- **Property Search**: Tenants can search for rental properties based on various criteria, such as location, price, number of bedrooms, and more.
- **Interest Management**: Tenants can express interest in properties and contact property owners directly through the platform.
- **Admin Panel**: Admin dashboard for managing users, properties, and resolving disputes.

## Tech Stack

- **Frontend**: [React](https://reactjs.org/) TODO
- **Backend**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/), [MongoDB](https://www.mongodb.com/)
- **Authentication**: JSON Web Tokens (JWT)


## Getting Started

To get started with Rentify, follow these steps:

1. Clone the repository: `git clone https://github.com/deepakkumar07-debug/rentify.git`
2. Install dependencies: `npm install`
3. Set up environment variables (e.g., MongoDB connection string, JWT secret) by creating a `.env` file at project root level

```js
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xzp5c19.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=WUBv2iFsxatEA9kUiKQU68cHGwqQD5PRCVpWjybWH2QVKZLJOv5+i+SoJc4qvRXH6GizMpjEixOPt0+y6C/s4g==

```
4. Start the development server: `npm start`
