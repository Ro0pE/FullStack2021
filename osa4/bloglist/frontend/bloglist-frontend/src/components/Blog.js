import React from 'react'
import blogService from "../services/blogs"  
import { useState } from 'react'

const Blog = (props) => {

  const [visible,setVisible] = useState(false)
  const hide = { display: visible ? 'none' : ''}
  const show = { display: visible ? '' : 'none'}

  
  const blogs = props.blogs
  const blog = props.blog
  const setBlogs = props.setBlogs
  const toggleVisibility = () => {
    setVisible(!visible)
  }  
// tänne async/await
  const handleLikeBlog = (blog) => {
    try {
    blogService.updateBlog(blog.id, {
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: blog.likes + 1,
      user: blog.user.id,
    })
    window.location.reload()
    } catch(error){
      console.log('error' , error)
    }
  }
  
  const handleRemoveBlog = (blog) => {
    try {
      if (window.confirm(`Do you really want to remove blog "${blog.title}" by ${blog.author}`)){
      blogService.removeBlog(blog.id)
      setBlogs(blogs)
      window.location.reload()
      }
    } catch(error){
      console.log('error removing blog : ', error)
    }
  }
 
 return (
   <div key={blog.id}  >
      <div style={hide}>
         <p>Title: {blog.title} <button id='view' onClick={toggleVisibility}>view</button></p>
      </div>
      <div style={show}>
        <p>Title: {blog.title} &emsp; Author: {blog.author} &emsp; Url: {blog.url}  &emsp; Likes: {blog.likes} <button id='hide' onClick={toggleVisibility}>hide</button>
        <button onClick={() => handleLikeBlog(blog)}>like</button><button onClick={() => handleRemoveBlog(blog)}>remove</button></p>
     </div> 
  </div>
 )
 }

export default Blog