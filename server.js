const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');


const helmet = require('helmet')
const cors = require('cors')
const PORT = process.env.PORT || 3000;


app.use(helmet.contentSecurityPolicy({
  useDefaults: true,
  crossOriginResourcePolicy: false,
  crossOriginEmbedderPolicy: false,
  directives: {
    "img-src":["'self'", "https: data"],
    "script-scr": ["'self'", "cdn.jsdelivr.net"]
  }
}))


app.use('/api', apiRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to ChristmasDB!');
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', router)

constPORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
