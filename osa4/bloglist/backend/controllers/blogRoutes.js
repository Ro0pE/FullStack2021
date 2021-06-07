const blogsRouter = require('express').Router()
const Blog = require('../models/blogDB')



blogsRouter.get('/', (request, response) => {
    Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    }).catch((error) => {
        console.log('virhe')
    })
})

blogsRouter.post('/', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      console.log(blog)
      response.status(201).json(result)
    }).catch((error) =>{
        console.log('virhe tallennuksessa')
    })
})

module.exports = blogsRouter
