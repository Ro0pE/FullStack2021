const blogsRouter = require('express').Router()
const Blog = require('../models/blogDB')
const User = require('../models/userDB')




blogsRouter.get('/', async (request,response) => {
   const blogs = await Blog.find({})
   response.json(blogs.map(blog => blog.toJSON()))  // palauta, muoto, lista
})

blogsRouter.post('/', async (request,response) => {
  
  const body = request.body
  const user = await User.findById(body.userId)
  console.log('testttt ' , user)
  const blog = new Blog ({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
    user: user._id
  })

  const newBlog = await blog.save()
  user.blogs = user.blogs.concat(newBlog._id)  // userin blog-kenttään tallennetaan luodun blogin id
  await user.save()
  response.json(newBlog.toJSON()) 
  
})

blogsRouter.delete('/:id', async (request, response) => {
  await Blog.findByIdAndDelete(request.params.id)

})
blogsRouter.put('/:id', async (request,response)=>{
  const body = request.body
  const updateBlog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  }
  await Blog.findByIdAndUpdate(request.params.id, updateBlog)
} )

module.exports = blogsRouter
