// index.js
const express = require('express');
const app = express();
const port = 9001;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World test hamza!');
});
app.get('/muaz', (req, res) => {
  res.send('Hello, ---------------!'+Math.random().toString());
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
