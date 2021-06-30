import React from 'react'
import blogService from "../services/blogs"  
import { useState } from 'react'



const Blog = (props) => {

  const [visible,setVisible] = useState(true)
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
    console.log('blog is liked , id :' , blog.id)
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
         <p className='yolo'>{blog.title} <button className='hideviewbutton' id='view' onClick={toggleVisibility}>view</button></p>
      </div>
      <div style={show}>
        <p className='boldattuyms'>Title: {blog.title}  <p className='boldattuyms'>Author: {blog.author} &emsp; </p><p className='boldattuyms'>Url: {blog.url}  &emsp;</p> 
        <p className='boldattuyms'>Likes: {blog.likes} &emsp; <button className='likebutton' onClick={() => handleLikeBlog(blog)}>like</button></p> <button className='hideviewbutton' id='hide' onClick={toggleVisibility}>hide</button>
        <button className='removebutton'onClick={() => handleRemoveBlog(blog)}>remove</button></p>
        <p>-------------------------------------------------------------------</p>
     </div> 
  </div>
 )
 }

export default Blog