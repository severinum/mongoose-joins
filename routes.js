const express = require('express')
const OwnerController = require('./controllers/owner_controller')
const HouseController = require('./controllers/house_controller')

const router = new express.Router

router.get("/", (req,res) => res.send('ok'))

// Owner routes
router.post('/owner', OwnerController.create)
router.get('/owner', OwnerController.findAll)
router.get('/owner/:id', OwnerController.findOne)
router.get('/owner/houses/:id', OwnerController.housesByOwner)

// House routes
router.post('/house', HouseController.create)
router.get('/house/:id', HouseController.findOne)




// app.get("/", async (req, res) => {
//   House.deleteMany({}, () => { })
//   Owner.deleteMany({}, () => { })

//   const newOwner = Owner({
//     name: "Mike Maknaka"
//   })
//   const savedOwner = await newOwner.save()


//   const newHouse = await House.create({
//     street: "Ulica 20/3",
//     city: "Frombork",
//     state: "Kuj-Pom",
//     zip: "85-665",
//     owner: savedOwner._id
//   })

//   savedOwner.houses.push(newHouse)
//   await savedOwner.save()

//   //const result = await House.find()

//   // Find all houses with populated users
//   let result = await House.find().populate("owner")


//   res.status(200).send(result)
// })


module.exports = router