# branchmanagement

**Description:**  
The Branch Management System is designed to streamline the operations of managing branches within an organization. It offers features for handling branch-related data efficiently, ensuring smooth operations across various locations.

## Features

-   Add, update, and delete branch details.
-   Manage branch statuses (e.g., Active, Inactive).
-   View a list of branches with sorting and pagination.
-   Secure and reliable backend API integration.
-   User-friendly interface for seamless management.

## Technologies Used

-   **Frontend:** React, HTML5, CSS3, JavaScript
-   **Backend:** Node.js, Express.js
-   **Database:** MongoDB
-   **Other Tools/Libraries:** Mongoose

## Installation

## Backend:

cd ../server
npm install

## Frontend:

cd client
npm install

## Usage

Adding Branches: Add new branch details, including name, address, and status.
Managing Status: Toggle between "ACTIVE" and "DiActive" statuses.
Updating Details: Edit existing branch information.
Viewing Branches: View a list of all branches with pagination for better usability.

## API Endpoints

Method Endpoint Description
GET /api/branches Fetch all branch details.
POST /api/branches Add a new branch.
PUT /api/branches/:id Update details of a specific branch.
DELETE /api/branches/:id Delete a specific branch.
# branchma
