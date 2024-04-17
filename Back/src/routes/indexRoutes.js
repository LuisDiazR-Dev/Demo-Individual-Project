// * router express
const router = require('express').Router()




// * Controllers imports
const getUserById = require('./controllers/users/getUserById')
const getUsers = require('./controllers/users/getUsers')
const postUser = require('./controllers/users/postUser')




// * Rutas
router.get('/users', getUsers)
router.get('/:id', getUserById)

router.post('/user', postUser)


module.exports = router
