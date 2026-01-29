const express = require('express')
const { createUser, getUsers, getUserById, updateUser, deleteUser } = require('../controller/userController.js')
const { validateUser, validateUpdateUser } = require('../middleware/userValidate.js')
const router = express.Router();

// Create a new user
router.post('/add', validateUser, createUser)


// get all users
router.get('/all',getUsers)


// get a user by id
router.get('/:id',getUserById)


// update
router.put('/update/:id', validateUpdateUser, updateUser)

router.delete('/delete/:id',deleteUser)

module.exports = router
