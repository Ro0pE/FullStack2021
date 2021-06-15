const express = require('express')
const app = express()
const blogRouter = require('./controllers/blogRoutes')
const userRouter = require('./controllers/userRoutes')
const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogRouter)
app.use('/api/users', userRouter)

module.exports = app