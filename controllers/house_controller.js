const House = require("../models/House")
const Owner = require("../models/Owner")

module.exports = {
  create: async (req, res) => {
    const {owner,street,city,state,zip}  = req.body
    console.log(owner, street)

    const house = await House.create({
      street,
      city,
      state,
      zip,
      owner: owner
    })
    await house.save()

    const ownerById = await Owner.findById(owner)
    ownerById.houses.push(house)
    await ownerById.save()

    return res.send(house)
  },

  findOne: async (req, res) => {
    const { id } = req.params
    const house = await House.findById(id).populate('owner')
    return res.send(house)
  }
}