import React, { useState } from 'react'
import blogService from "../services/blogs"
//import Notification from './Notification'

const CreateBlog = props => {


  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  const [check, setCheck] = useState(false);


  const user = props.user
  const blogs = props.blogs
  const setBlogs = props.setBlogs
  const setNotification = props.setNotification
  const notification = props.notification

  const createBlog  =  (event, title, author, url) => {
    event.preventDefault()
  
  const newBlog  =  {
      title: title,
      author: author,
      url: url
  }

  try {
    blogService.createBlog(newBlog)
    setAuthor('')
    setTitle('')
    setUrl('') 
    setBlogs(blogs.concat(newBlog))

    setNotification(`Succsefully created a new blog '${newBlog.title}'  by ${user.name}`)
    console.log(notification)
    setTimeout(() => {
    setNotification(null)
}, 3000)
    setCheck(check => !check)


  }catch(error){
     console.log("Error addding stuff: " , error)
  }
  window.location.reload()
 
  
}

const openForm = () => {
    setCheck(check => !check)
  
}
const closeForm = () => {
  setCheck(check => !check)

}

if (check){
  
  return (
    <div>
      <button onClick = {closeForm}>Hide</button>
      <h2>create new</h2>
      <form onSubmit={event => createBlog(event, title, author, url)}>
        <div>Title: <input id='title' value={title} onChange={({ target }) => setTitle(target.value)} /></div>
        <div>Author: <input id='author' value={author} onChange={({ target }) => setAuthor(target.value)} /></div>
        <div>Url: <input id='url' value={url} onChange={({ target }) => setUrl(target.value)} /></div>
        <button type="submit" id='create'>create</button>
      </form>
    </div>
  )
  } else {
    return (
      <button onClick = {openForm}>Create</button>
    )
  }

}





export default CreateBlog