const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const path = require('path'); 

require('dotenv').config();

 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });


app.use(express.static(path.join(__dirname, 'build')));

const port = process.env.PORT || 5000;
app.listen (port, () => {
    console.log('Server started');
})
