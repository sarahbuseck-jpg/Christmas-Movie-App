const express = require('express');   // Only declare once
const server = express();
const cors = require('cors');
const helmet = require('helmet');
const apiRouter = require('./routes/api'); // make sure the file exists

const PORT = process.env.PORT || 3000;

// Middleware
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Routes
server.use('/api', apiRouter);

// Start server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
