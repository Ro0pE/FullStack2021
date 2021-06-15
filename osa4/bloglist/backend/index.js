require('dotenv').config()

const http = require('http')
const express = require('express')
const app = require('./app')
const server = http.createServer(app)
const Blog = require('./models/blogDB')



const PORT = process.env.PORT
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
