const express = require('express');   
const server = express();
const cors = require('cors');
const helmet = require('helmet');
const apiRouter = require('./routes/api'); 

const PORT = process.env.PORT || 3000;


server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));


server.use('/api', apiRouter);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
