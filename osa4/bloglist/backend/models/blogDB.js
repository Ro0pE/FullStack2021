require('dotenv').config()
const mongoose = require('mongoose')




//if (process.argv.length<3) {
 // console.log('give password as argument')
  //process.exit(1)
//}

//const password = process.argv[2]
const url = process.env.NODE_ENV === 'test'  // jos node_env on test, käytetään testi database
? process.env.TEST_MONGODB_URI               // jos ei, niin käytetään normia
: process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
.then(() => {
  console.log('connected to MongoDB')
})
.catch((error) => {
  console.log('error connection to MongoDB:', error.message)
})


const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number,
    user: {
         type: mongoose.Schema.Types.ObjectId, 
         ref: 'User'
  }
  })
  
  blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject.__v
      delete returnedObject._id

      
    }
  })

  

  module.exports = mongoose.model('Blog', blogSchema)