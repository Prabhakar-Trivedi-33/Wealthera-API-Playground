# InWealthera API Playground - React Frontend

## Overview

This is a React-based frontend interface for the InWealthera API Playground, designed to mimic the functionality of `test-ui.inwealthera.com`. The application provides a user-friendly interface for making API requests and viewing responses.

## Features

- **Authentication System**: Mock login/logout functionality
- **API Playground**: Interactive interface for sending requests to various endpoints
- **Request Editor**: JSON editor with syntax validation
- **Response Viewer**: Pretty-printed JSON responses with syntax highlighting
- **Endpoint Selection**: Dropdown to choose from predefined API endpoints
- **Error Handling**: Clear error messages for failed requests

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later) or yarn
- Git (optional)

## Installation

1. **Clone the repository** (if you haven't already):
```bash
git clone https://github.com/your-repository/inwealthera-playground.git
cd inwealthera-playground

# InWealthera API Playground - React Frontend

## Installation

### Install dependencies:

```bash
npm install
# or
yarn install

>>>Configuration
The application can be configured by creating a .env file in the root directory:

.env
REACT_APP_API_BASE_URL=https://test-ui.inwealthera.com
REACT_APP_DEFAULT_AUTH_TOKEN=your_mock_token_here



Available Scripts
In the project directory, you can run:

>>>npm start
Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

>>>npm test
Launches the test runner in interactive watch mode.

>>>npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
inwealthera-playground/

Project Structure
├── public/                  # Static files
├── src/
│   ├── components/          # Reusable components
│   │   ├── ApiPlayground.js # Main playground component
│   │   ├── EndpointSelector.js
│   │   ├── RequestEditor.js
│   │   └── ResponseViewer.js
│   ├── context/            # React context providers
│   │   └── AuthContext.js
│   ├── App.js              # Main application component
│   ├── App.css             # Global styles
│   └── index.js            # Application entry point
├── .env                    # Environment variables
├── package.json            # Project dependencies and scripts
└── README.md               # This file

