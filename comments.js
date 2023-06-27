// Create web server

// Import modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Create web server
const app = express();

// Set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// Create endpoint for POST requests
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  const name = req.body.name;
  console.log(`${name} said "${comment}"`);

  res.status(200).json({
    message: 'Thank you for your comment!'
  });
});

// Start server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});