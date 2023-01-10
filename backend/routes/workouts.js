const express = require('express')

const router = express.Router()

// GET all Workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all Workouts'})
})

// GET a single Workouts
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single Workouts'})
})

//POST a new workout
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new workout'})
})

// DElETE a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a Workout'})
})

// Update a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update a workout'})
})

module.exports = router