const Owner = require("../models/Owner")
const House = require("../models/House")

module.exports = {
  create: async (req, res) => {
    const { name } = req.body
    const owner = await Owner.create({
      name
    })

    return res.send(owner)
  },

  findAll: async (req, res) => {
    const owner = await Owner.find().populate("houses")
    return res.send(owner)
  },
  findOne: async (req, res) => {
    const { id } = req.params
    const owner = await Owner.findById(id).populate("houses")
    return res.send(owner)
  },
  housesByOwner: async (req, res) => {
    const { id } = req.params
    const owner = await Owner.findById(id).populate('houses')

    return res.send(owner.houses)
  }
}