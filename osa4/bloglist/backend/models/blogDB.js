require('dotenv').config()
const mongoose = require('mongoose')



const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number,
    user: {
         type: mongoose.Schema.Types.ObjectId, 
         ref: 'User'
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  })
  
  blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject.__v
      delete returnedObject._id

      
    }
  })

  

  module.exports = mongoose.model('Blog', blogSchema)