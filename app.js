const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
app.use(bodyParser.json())
const path = require('path');
require('dotenv').config();
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, access-token');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

const routes = require('./api/routes');
routes.run(app);


app.use(express.static(path.join(__dirname, 'build')));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Server started');
})
