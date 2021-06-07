const express = require('express')
const app = express()

const blogsRoutes = require('./controllers/blogRoutes')
const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogsRoutes)

module.exports = app