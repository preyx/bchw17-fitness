const router = require('express').Router()
const { Workout } = require('../models')

// GET all items
router.get('/workouts', (req, res) => Workout.find()
  .then(workouts => res.json(workouts))
  .catch(e => console.error(e)))

// POST one item
router.post('/workouts', (req, res) => {
  console.log(req.body)
  // Item.create({
  //   text: req.body.text,
  //   isDone: req.body.isDone,
  //   owner: req.user._id
  // })
  //   .then(({ _id }) => {
  //     User.findByIdAndUpdate(req.user._id, { $push: { items: _id } })
  //       .then(() => res.sendStatus(200))
  //   })
  //   .catch(e => console.error(e))
})

// PUT one item
router.put('/workouts', (req, res) => {
  console.log(req.body)
})

// Item.findByIdAndUpdate(req.params.id, req.body)
//   .then(() => res.sendStatus(200))
//   .catch(e => console.error(e)))

// DELETE one item
router.get('/workouts/range', (req, res) => {
  console.log(req.body)
})

// Item.findByIdAndDelete(req.params.id)
//   .then(({ _id, owner }) => {
//     User.findByIdAndUpdate(owner, { $pull: { items: _id } })
//       .then(() => res.sendStatus(200))
//   })
//   .catch(e => console.error(e)))

module.exports = router
