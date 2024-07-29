// Import the express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define a port to listen on
const PORT = process.env.PORT || 3000;

// Set up a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
