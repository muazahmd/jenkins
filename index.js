// index.js
const express = require('express');
const app = express();
const port = 9000;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World test!');
});
app.get('/muaz', (req, res) => {
  res.send('Hello, muaz!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
