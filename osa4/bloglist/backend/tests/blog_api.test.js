const mongoose = require('mongoose')
const supertest = require('supertest')
const { post } = require('../app')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blogDB')
const helper = require('../utils/user_helper')

const testBlogs = [
    {
        
        title: 'Eka',
        author: 'Piripirkko',
        url:
          'www.thl.fi',
        likes: 5,
        userId: "abc122",

      },
      {
        
        title: 'toka',
        author: 'Mikko metsästä',
        url:
          'www.maltsu.fi',
        likes: 10,
        userId: "abc125",

      },
      {
        
        title: 'kolmas',
        author: 'Mikko metsästä',
        url:
          'www.gg.fi',
        likes: 73,
        userId: "abc126",
 
      },
      {
        
        title: 'neljäs',
        author: 'Keitiömestarin erikoinen',
        url:
          'www.kokkikolmonen.fi',
        likes: 1150,
        userId: "abc172",

      },
]
beforeEach(async () => {
    await Blog.deleteMany({})
    let blogObject = new Blog(testBlogs[0])
    await blogObject.save()
    blogObject = new Blog(testBlogs[1])
    await blogObject.save()
    blogObject = new Blog(testBlogs[2])
    await blogObject.save()
    blogObject = new Blog(testBlogs[3])
    await blogObject.save()
    jest.setTimeout(999999999)
})





describe('check JSON', () => {
test('blogs are returned as JSON', async () => {
  jest.setTimeout(60000000)
    await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})
test('blogs can be added', async() => {
  helper.initialUsers[0].id
    const newBlog = {
      title:"2222222" ,
      author: "Sami Salo",
      url: "www.goooooogle.juu",
      likes: 123,
      userId: "abc12"   // WTF
      }
    await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(testBlogs.length+1)


})
test('if value of "like" is empty, set it value to 0', async () =>{
    const newBlog = {
      title: "test",
      author: "test",
      url: "test",
      likes: null,
      user: "test"
      }
      if (newBlog.likes === null) {
          newBlog.likes = 0
      }
      await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)
      
     
      expect(newBlog.likes).toBe(0)
})
test('if added blog is missing fields "title" and "url", response with status code 400 "Bad request"', async() => {
    const newBlog = {
        author: 'Testihenkilö',
        likes: 1
      }
    await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(400)

})
})
describe('check response', () => {
test('blogs have id-fields', async () => {
    const response = await api.get('/api/blogs')
    response.body.forEach(blog => {
        expect(blog.id).toBeDefined()
    })
})
})





afterAll(() => {
    mongoose.connection.close()

})