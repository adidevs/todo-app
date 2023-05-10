# To Do List App

This is a To Do List app built using the MERN stack. The client is based on React.js and the backend is based on Express and Node. The app allows users to add and manage their tasks.

## Getting Started

To set up the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install the required dependencies for both the client and the server:
```sh
cd client
npm install
cd ../server
npm install
```
4. In the `server` directory, create a `.env` file and set the following environment variables:

```sh
clusterURL=<your MongoDB cluster URL>
```
5.In the client directory, create a .env file and add the following:
```sh
REACT_APP_API_URL=http://localhost:1000/
```
6. Start the server by running `npm start` in the `server` directory.
7. Start the client by running `npm start` in the `client` directory.
8. Open the app in your browser at `http://localhost:3000`.

## Available Scripts

In the `client` directory, you can run:

### `npm start`

Runs the app in development mode. Open `http://localhost:3000` to view it in the browser.

In the `server` directory, you can run:

### `npm start`

Runs the server in development mode. Open `http://localhost:1000` to access it.

## Contributing

Contributions to the project are welcome. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your fork.
5. Submit a pull request to the `main` branch of the original repository.

