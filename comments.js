// Create web server
// Create a new express application
const express = require('express');
const app = express();

// Add a route that listens on /comments and sends back the comments array
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the server
app.listen(4001, () => {
  console.log('Your app is listening on port 4001');
});

// Create comments array
const comments = [
  { username: 'tammy', text: 'lololol' },
  { username: 'fishy', text: 'I like fish' },
  { username: 'tammy', text: 'what does that mean?' }
];