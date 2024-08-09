# Shop Inventory Management System

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)
- [Evaluation Criteria](#evaluation-criteria)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This project is a backend system built to manage the inventory and sales transactions for a small shop. It allows users to add items to the inventory, generate sales bills, and automatically adjust the inventory based on the sales made. The system is developed using Node.js, Express.js, and MongoDB.

## Features
- Add new items to the inventory.
- Retrieve a list of all items in the inventory.
- Create a bill for a sales transaction, specifying the items sold and their quantities.
- Retrieve a list of all bills generated.
- Get details of a specific bill by its ID.
- Automatically update the inventory when a bill is created by subtracting the sold items.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [MongoDB](https://www.mongodb.com/) (version 4.x or higher)
- [Git](https://git-scm.com/)

### Steps to Install
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Rishu18D/shop-inventory-management.git
   cd shop-inventory-management


### Install the Dependencies:

```bash
npm install
```
### Setup .env file
MONGO_URI=your_mongodb_connection_string
PORT=5000

### Start the Application
npm start

### Folder Structure
```
**shop-inventory-management/
│
├── config/
│   └── db.js             # MongoDB connection setup
│
├── controllers/
│   ├── inventoryController.js  # Handles inventory CRUD operations
│   └── billController.js       # Handles bill creation and retrieval
│
├── models/
│   ├── item.js           # Schema definition for inventory items
│   └── bill.js           # Schema definition for bills
│
├── routes/
│   ├── inventoryRoutes.js # Routes for inventory-related API calls
│   └── billRoutes.js      # Routes for bill-related API calls
│
├── .env                   # Environment variables (not to be shared in production)
├── .gitignore             # Files and directories to be ignored by Git
├── server.js              # Main server file
└── package.json           # Project dependencies and scripts
```
**
### Instructions Summary:
1. **Write the README.md file:** The above template should be used as your project's README.md.
2. **Maintain code quality:** Ensure your code is clean, well-commented, and easy to understand.
3. **Test the API endpoints:** Confirm that all your endpoints are working correctly.
4. **Submit the source code:** Include all necessary files in your Git repository, especially the `README.md` and a `.env.example` file.
5. **Documentation:** The `README.md` file will serve as the brief documentation needed for the project submission, covering setup, usage, and other relevant details. 

This README will give the evaluator clear instructions on how to set up, run, and test your application, and it will ensure that all project requirements are met.
