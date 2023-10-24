const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
mongoose.set('strictQuery', false);

const House = require("./models/House")
const Owner = require("./models/Owner")
const router = require('./routes')


const app = express()
app.use(bodyParser.json())

app.use(router)

// ** MongoDB ** //
MURL = process.env.MURL
mongoose.connect(MURL, () => {
  console.log('MongoDB connection: Successful')
})

app.listen(process.env.PORT, () => {
  console.log("APP status: ON")
})