const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
mongoose.set('strictQuery', false);

const House = require("./models/House")
const Owner = require("./models/Owner")

const app = express()
app.use(bodyParser.json())

app.get("/", async (req, res) => {
  House.deleteMany({}, () => { })
  Owner.deleteMany({}, () => { })

  const newOwner = Owner({
    name: "Mike Maknaka"
  })
  const savedOwner = await newOwner.save()


  const newHouse = await House.create({
    street: "Ulica 20/3",
    city: "Frombork",
    state: "Kuj-Pom",
    zip: "85-665",
    owner: savedOwner._id
  })

  savedOwner.houses.push(newHouse)
  await savedOwner.save()

  //const result = await House.find()

  // Find all houses with populated users
  let result = await House.find().populate("owner")


  res.status(200).send(result)
})

// ** MongoDB ** //
MURL = process.env.MURL
mongoose.connect(MURL, () => {
  console.log('MongoDB connection: Successful')
})

app.listen(process.env.PORT, () => {
  console.log("APP status: ON")
})