# Full Stack SDM - Coding Challenge 
## Project - Wildfire Inventory
## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [License](#license)

## Introduction

This documentation provides an overview of the frontend application for Wildfire Inventory. It includes information on how to get started, project structure, technologies used, features, usage instructions, development guidelines, deployment instructions, and licensing details.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm (Node Package Manager) installed on your machine.
- A compatible web browser (e.g., Google Chrome, Mozilla Firefox).

### Installation

To install and run the frontend application, follow these steps:

1. Clone the repository from [GitHub Repo URL](https://github.com/mayorscript/wildfire-inventory-app).

   ```bash
   git clone https://github.com/mayorscript/wildfire-inventory-app.git

2. To get started, navigate to the project directory:

    ```bash
     cd wildfire-inventory-app
    ```
3. Install project dependencies:
    ```
    yarn install
    ```
4. Start the development server:
    ```
    yarn run dev
    ```
5. Open your web browser and access the application at http://localhost:3000.

# Project
## Project Structure

The project follows a standard directory structure:

```
your-project/
│
├── public/                # Public assets
│   └── ...
│
├── src/                   # Source code
    |── app/               #Page components (page.tsx) & Global CSS
       └── ... 
    |── components/        # React components
    │   └── ...
    |── lib/               # Utility functions & API Services
       └── ...
├── package.json           # Project dependencies and scripts
├── tailwind.config.json   # Tailwind CSS config
├── README.md              # Project documentation
└── ...

```

## Technologies Used
- React.js
- Next.js
- Ant Design
- Axios
- React Query
- Tailwind CSS

## Features
- **Feature 1**: Pull wildifires information from NASA.

## License
This project is licensed under the MIT License.
