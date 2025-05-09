Wealthera API Playground - React Frontend
Overview
This is a React-based frontend interface for the InWealthera API Playground, designed to mimic the functionality of test-ui.inwealthera.com. The application provides a user-friendly interface for making API requests and viewing responses.

Features
Authentication System: Mock login/logout functionality

API Playground: Interactive interface for sending requests to various endpoints

Request Editor: JSON editor with syntax validation

Response Viewer: Pretty-printed JSON responses with syntax highlighting

Endpoint Selection: Dropdown to choose from predefined API endpoints

Error Handling: Clear error messages for failed requests

Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v14 or later)

npm (v6 or later) or yarn

Git (optional)

Installation
Clone the repository (if you haven't already):

bash
git clone https://github.com/your-repository/inwealthera-playground.git
cd inwealthera-playground
Install dependencies:

bash
npm install
# or
yarn install
Configuration
The application can be configured by creating a .env file in the root directory:

env
REACT_APP_API_BASE_URL=https://test-ui.inwealthera.com
REACT_APP_DEFAULT_AUTH_TOKEN=your_mock_token_here
Available Scripts
In the project directory, you can run:

npm start
Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test
Launches the test runner in interactive watch mode.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

Project Structure
inwealthera-playground/
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
Connecting to Real API
By default, the application uses mock responses. To connect to the real InWealthera API:

Uncomment the real API call in src/components/ApiPlayground.js

Ensure you have a valid authentication token

Update the base URL in .env if different from the default

Customization
Adding New Endpoints
To add new API endpoints:

Edit src/components/EndpointSelector.js

Add your new endpoint to the endpoints array:

js
const endpoints = [
  // ... existing endpoints
  '/api/v1/your/new/endpoint'
];
Styling
The application uses CSS variables for theming. To change the color scheme, modify the variables in src/App.css:

css
:root {
  --primary-color: #2c3e50;       /* Main header color */
  --secondary-color: #3498db;     /* Primary button color */
  --error-color: #e74c3c;         /* Error messages */
  /* ... other variables */
}
Troubleshooting
Common Issues
Invalid JSON in Request Editor:

Ensure your request body is valid JSON

Use the built-in validator to check for syntax errors

Authentication Errors:

Make sure you're logged in before making API calls

Verify your auth token is valid

CORS Issues:

Ensure the API server allows requests from your domain

Configure proper CORS headers on the backend

Contributing
Contributions are welcome! Please follow these steps:

Fork the repository

Create a new branch for your feature (git checkout -b feature/your-feature)

Commit your changes (git commit -m 'Add some feature')

Push to the branch (git push origin feature/your-feature)

Open a Pull Request
