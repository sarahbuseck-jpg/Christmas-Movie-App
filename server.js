// server.js
const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');

// Middleware to parse JSON
app.use(express.json());

// Use the API routes
app.use('/api', apiRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to ChristmasDB!');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
