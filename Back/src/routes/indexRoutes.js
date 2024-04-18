// * router express
const router = require('express').Router()




// * Controllers imports
const getUserById = require('./controllers/users/getUserById')
const getUsers = require('./controllers/users/getUsers')
const createUser = require('./controllers/users/postUser')




// * Rutas
router.get('/users', getUsers)
router.get('/user/:id', getUserById)

router.post('/user', createUser)


module.exports = router


// ? el handler se encarga de:
// ? recibir la req
// ? unificar datos
// ? Devolver res
// ? Invoca al controller
// ? el handler NUNCA interactúa con fuentes externas de info
// ? el CONTROLLER es otra función