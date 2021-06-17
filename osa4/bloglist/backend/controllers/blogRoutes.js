const blogsRouter = require('express').Router()
const Blog = require('../models/blogDB')
const User = require('../models/userDB')
const jwt = require('jsonwebtoken')




blogsRouter.get('/', async (request,response) => {
   const blogs = await Blog.find({}).populate('user', { username: 1, name: 1})
   response.json(blogs.map(blog => blog.toJSON()))  // palauta, muoto, lista
})

blogsRouter.post('/', async (request,response) => {
  try {
  const body = request.body
  const decodedToken = jwt.verify(request.token, process.env.SECRET) // varmistaa tokenin oikeellisuuden
  if (!request.token || !decodedToken.id){   // jos tokenia ei ole, tai dekoodattu tokeni ei sisällä käyttäjäst kertovaa id:t -> error
    return response.status(401).json({error: 'Token missing or invalid'})
  }

  if (!body.title || !body.url) {

    return response.status(400).json({ error: 'Title or url is missing...'})
  }
  if (!body.likes){
    body.likes = 0
  }

  const user = await User.findById(decodedToken.id)
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
  return response.status(201).json(newBlog.toJSON()) 
} catch(error) {
  return response.status(700).json({ error: "jotain meni pieleen..."})
}
  
})

blogsRouter.delete('/:id', async (request, response) => {
  try {
  const body = request.body
  const user = jwt.verify(request.token, process.env.SECRET)
    
  console.log('token id', request.token)
  console.log('user id' , user)
  console.log('blogi id = ', request.params.id)


  const blog = await Blog.findById(request.params.id)
  console.log('test',blog.user.toString())

  
 
  if (blog.user.toString() !== user.id) {
    return response.status(401).json({ error: 'Not allowed to delete this blog' })
  }

  await Blog.findByIdAndDelete(request.params.id)

  response.status(201).end()
} catch (error) {
  console.log(error)
  response.status(400).send({ error: ' id is wrong'})
}

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
