  
import { Link } from "react-router-dom"
import React, { useState, useEffect } from 'react'
import blogService from '../services/blogs'



const User = ({ users,blogs }) => {

  return (
<div>
      <ul>{users.map((user) => (
           <Link style={{textDecoration: 'none'}} to = {`/users/${user.id}`}> <li><a className='boldattuyms2'>{user.name} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {user.blogs.length}</a></li></Link>
        ))}
        </ul> 
    </div>
)

}



const UserDetail = ({ user }) => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    blogService.getAllBlogs().then(blogs => {
      setBlogs(blogs)
    })  
  }, [])


  const filttered = blogs.filter(blogi => blogi.user.name === user.name)


  const blogit = filttered.map((blog) => 
  <li>{blog.title}</li>)
  console.log('blogsss' , blogs)

  console.log('use tiedot ' , user.name)
  if (user)
    return (
      <div><p>{blogit}</p></div>
     

    )


}
/*      <div>
<h2>{user.username}</h2>
<h3>added blogs</h3>
<ul>{user.blogs.map((blog) => (
  <li><p>{blog} </p></li>
))}     </ul>
</div> */

export { UserDetail, User }