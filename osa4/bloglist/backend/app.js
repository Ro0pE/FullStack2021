const express = require('express')
const mongoose = require('mongoose')
const app = express()
const blogRouter = require('./controllers/blogRoutes')
const userRouter = require('./controllers/userRoutes')
const loginRouter = require('./controllers/loginRoute')
const testingRouter = require('./controllers/testRoutes')
const commentsRouter = require('./controllers/commentRoutes')
const cors = require('cors')
const middleware = require('./utils/middleware')






//if (process.argv.length<3) {
 // console.log('give password as argument')
  //process.exit(1)
//}

//const password = process.argv[2]
const url = process.env.NODE_ENV === 'test'  // jos node_env on test, käytetään testi database
? process.env.TEST_MONGODB_URI               // jos ei, niin käytetään normia
: process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
/*.then(() => {
  console.log('connected to MongoDB')
})
.catch((error) => {
  console.log('error connection to MongoDB:', error.message)
}) */


app.use(cors())
app.use(express.json())
app.use(middleware.tokenExtractor)
app.use('/api/blogs', blogRouter)
app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)
app.use('/api/blogs', commentsRouter)

//if (process.env.NODE_ENV === 'test') {
 // const testingRouter = require('./controllers/testRoutes')
  app.use('/api/testing', testingRouter)
//}


module.exports = app