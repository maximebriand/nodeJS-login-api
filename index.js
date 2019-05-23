require('dotenv').config()


const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// db instance connection
const dbConfig = require("./config/database");
mongoose.Promise = global.Promise;



const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

const port = 3000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });

app.get('/', (req, res) => {
    res.json({"message": "Hello, welcome on my first API :)"});
});
