const mongoose = require("mongoose")

const ownerSchema = new mongoose.Schema({
  name: String,
  houses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "House"
  }]
})


module.exports =  mongoose.model("Owner", ownerSchema)