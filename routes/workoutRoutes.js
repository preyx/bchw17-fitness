const router = require('express').Router()
const { Workout } = require('../models')

// GET all workouts
router.get('/workouts', (req, res) => Workout.find()
  .then(workouts => res.json(workouts))
  .catch(e => console.error(e)))

// POST one workout
router.post('/workouts', (req, res) => {
  Workout.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})

// PUT one exercise in workout
router.put('/workouts/:id', (req, res) => {
  console.log(req.body)
  Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true, runValidators: true })
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})

// GET workouts in range
router.get('/workouts/range', (req, res) => {
  Workout.find().limit(7)
    .then(workout => {
      res.json(workout)
    })
    .catch(e => console.error(e))
  console.log(req.body)
})

module.exports = router
