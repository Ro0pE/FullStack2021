const bcrypt = require('bcrypt')
const usersRoutes = require('express').Router()
const User = require('../models/userDB')

usersRoutes.get('/', async (request, response) => {
    const users = await User.find({}).populate('blogs', { title: 1, author: 1, url: 1, likes: 1})
    response.json(users.map(user => user.toJSON()))
})

usersRoutes.post('/', async (request,response) => {
    try {
    const body = request.body

    if (!body.username){
        return response.status(400).json({error: 'Username must exists'})
    }

    if (body.username.length < 3){
        return response.status(400).json({error: 'Username must be 3 or more characters long.'})
    }
    const kaytossa = await User.findOne({username: body.username})

    if (kaytossa){
        return response.status(400).json({error:'Username already in use'})
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)
    const user = new User ({
        username: body.username,
        name: body.name,
        passwordHash,
    })
    const savedUser = await user.save()  
    return response.status(201).json(savedUser)  // palauta, muoto, useri

    }catch(error){

    return response.status(500).send({ error: "jottain hajosi taasen.."})
}
 })








module.exports = usersRoutes