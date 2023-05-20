/* This is a module in Node.js that defines a router for handling HTTP requests for goals. It imports
the `express` module and creates a router object using `express.Router()`. It also imports functions
from the `goalController` module to handle GET, POST, PUT, and DELETE requests for goals. The
`protect` function from the `authMiddleware` module is used as middleware to protect the routes from
unauthorized access. Finally, the router is exported as a module for use in other parts of the
application. */
const express = require('express')
const router = express.Router()
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

module.exports = router
