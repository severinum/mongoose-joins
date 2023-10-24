const mongoose = require("mongoose")

const houseSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zip: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Owner"
  }
})


module.exports =  mongoose.model("House", houseSchema)