const bcrypt = require('bcrypt')
const usersRoutes = require('express').Router()
const User = require('../models/userDB')

usersRoutes.get('/', async (request, response) => {
    const users = await User.find({}).populate('blogs')
    response.json(users.map(user => user.toJSON()))
})

usersRoutes.post('/', async (request,response) => {
    const body = request.body
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)
    const user = new User ({
        username: body.username,
        name: body.name,
        passwordHash,
    })
    const savedUser = await user.save()
    
    response.json(savedUser)  // palauta, muoto, useri
 })








module.exports = usersRoutes