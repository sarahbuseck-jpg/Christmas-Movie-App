const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');

const helmet = require('helmet');
const cors = require('cors');

// PORT (only one declaration)
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet.contentSecurityPolicy({
  useDefaults: true,
  crossOriginResourcePolicy: false,
  crossOriginEmbedderPolicy: false,
  directives: {
    "img-src": ["'self'", "https:", "data:"],
    "script-src": ["'self'", "cdn.jsdelivr.net"]
  }
}));

// Basic middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api', apiRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to ChristmasDB!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});