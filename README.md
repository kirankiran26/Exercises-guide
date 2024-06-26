Exercise Search App
The Exercise Search App is a simple React application that allows users to search for exercises based on muscle groups. It fetches data from the API Ninjas Exercise API and displays the results in a user-friendly format.

## Features

- Search for exercises by muscle group.
- Display exercise details including name, type, equipment, difficulty, and instructions.
- Loading and error handling for better user experience.


## Technologies Used

- React
- JavaScript
- CSS

Getting Started
Follow these instructions to get a copy of the project up and running on your local machine:

Prerequisites
Make sure you have the following installed on your machine:

Node.js
npm (Node Package Manager)

## Installation

1. Clone the repository:
git clone https://github.com/kirankiran26/Exercises-guide.git


2. Navigate to the project directory:

3. Install the dependencies:

Running the Application
To start the development server, run the following command:

npm start

This will start the application on localhost.

Building for Production
To create a production build, run:

npm run build

This will create a build directory with the production files.

Project Structure
exercise-search-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   └── Data.js
│   ├── App.js
│   ├── index.js
│   └── Data.css
│
├── .gitignore
├── package.json
└── README.md

## Usage

1. Enter a muscle group in the search bar (e.g., “biceps”, “triceps”).
2. Click the “Search” button.
3. View the list of exercises related to the muscle group.


## API Key

This application uses the API Ninjas Exercise API to fetch exercise data. The API key is hardcoded in the `Data.js` file. For production use, consider storing the API key securely, such as in environment variables.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.