const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))







app.use((err, req, res, next) => { 
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  })



  module.exports = app