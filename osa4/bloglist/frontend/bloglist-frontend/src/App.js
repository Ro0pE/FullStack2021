import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'

import Users from './components/Users'
import CreateForm from './components/CreateForm'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'
import userService from './services/users'
import { Link } from "react-router-dom";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { User,UserDetail } from './components/User'
//import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')
  const [notification, setNotification] = useState('') 


 

  useEffect(() => {
    blogService.getAllBlogs().then(blogs => {
      setBlogs(blogs)
    })  
  }, [])

  useEffect(() => {
    userService.getAll().then(users => {
      setUsers(users)
    })

  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
   
    if (loggedUserJSON){
      const userDude = JSON.parse(loggedUserJSON)
      setUser(userDude)
      blogService.setToken(userDude.token)
    }
  }, [])



const handleLogout = async (event) => {
  try {
    window.localStorage.removeItem('loggedBlogappUser')
    setUser(null)
  } catch(expection){
    console.log('virhe')


  }
}

  const handleLogin = async (event) => {
    event.preventDefault()
    
    try {
      const user = await loginService.login({username, password})
      
      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))

      blogService.setToken(user.token) 
      setUser(user)
      setUsername('')
      setPassword('')
    } catch(expection){
      setNotification('ERROR, wrong credentials')
      setTimeout(() => {
        setNotification(null)
    }, 3000)
      console.log('wrong credentials')
    }
  }

    //filteredBlogs = blogs.filter(blog => blog.user.name === user.name)


  //console.log(filteredBlogs.length)
//filteredBlogs.sort((second,first) => first.likes - second.likes)
console.log('users', users)



const Menu = () => {
  return (
    <div>
   <Link style={{textDecoration: 'none'}} to="/users"><a>USERS </a> </Link>
   <Link style={{textDecoration: 'none'}} to="/create"><a>CREATE </a> </Link>
   <Link style={{textDecoration: 'none'}} to="/blogs"><a>BLOGS </a> </Link>
    </div>
 
  )
}
const filteredBlogs = blogs.sort((second,first) => first.likes - second.likes)



console.log('TEST',notification)

  if (user === null) {

    return (
      <div>
       <Notification message={notification}/>
        <h1 className='firstLogin'> LOGIN PAGE</h1>
        <form onSubmit={handleLogin}>
          <div className='credentials'>
            Username: 
            <input id='username' type="text" value={username} name="Username" onChange={({target}) => setUsername(target.value)}
            />
          </div>
          <div className='credentials'>
            Password:
            <input id='password' type="text" value={password} name="Password" onChange={({target}) => setPassword(target.value)}
            />
          </div>
          <div>
            <button className='loggedin' id='login-button'type="submit"> LOGIN </button>
          </div>
        </form>
      </div>
    )
} else {


//<Route path = '/'>    </Route>

return (
  
  <div>

  <Notification message={notification}/>
  <div className='loggedin'><Menu />  {user.name} is logged in &emsp;<button className='loggout' onClick={handleLogout}> Logout</button></div>
  <Route path = "/blogs">
  <h1 className = 'blogs'>Blogs</h1>
  <div></div>
  <div className='blog'> {filteredBlogs.map(blog =>
    <Blog key={blog.id} blog={blog} setBlogs={setBlogs} blogs={blogs} />
  )} </div>
  </Route>
  <div>
    <Route path = "/create">
    <CreateForm  key={user.id} user={user} blogs={blogs} setBlogs={setBlogs} notification={notification} setNotification={setNotification}/>
    </Route>
    </div>
   
    <div>
    <Route path = "/users">
      <h1 className='users'>Users</h1>
      <h2 className='blogscreated'>    &emsp;&emsp;&emsp;&emsp;&emsp;  &emsp;&emsp;&emsp;  &emsp;&emsp;&emsp;&emsp;&emsp;  Blogs created:</h2>
     <User key={user.id} users={users} blogs={blogs}/>
     </Route>

     
    </div>
    

</div>
)
}
}


export default App