const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


server.use((err, req, res, next) => { 
  const status = err.status || 500;
  console.log(err)
  console.log(err.message)
  const message =  err.message;
  return res.status(status).send({error:message});
});



  module.exports = app