const testRouter = require('express').Router()
const Blog = require('../models/blogDB')
const User = require('../models/userDB')

testRouter.post('/reset', async (request, response) => {
  await Blog.deleteMany({})
  await User.deleteMany({})

  response.status(204).end()
})

module.exports = testRouter