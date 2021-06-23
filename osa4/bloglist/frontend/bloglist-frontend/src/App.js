import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import CreateForm from './components/CreateForm'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')
  const [notification, setNotification] = useState(null) 


 

  useEffect(() => {
    blogService.getAllBlogs().then(blogs => {
      setBlogs(blogs)
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



console.log('test!')
  if (user === null) {

    return (
      <div>
       <Notification message={notification}/>
        <h1> LOGIN</h1>
        <form onSubmit={handleLogin}>
          <div>
            Username: 
            <input type="text" value={username} name="Username" onChange={({target}) => setUsername(target.value)}
            />
          </div>
          <div>
            Password:
            <input type="text" value={password} name="Password" onChange={({target}) => setPassword(target.value)}
            />
          </div>
          <div>
            <button type="submit"> LOGIN </button>
          </div>
        </form>
      </div>
    )
} else {

const filteredBlogs = blogs.sort((second,first) => first.likes - second.likes)

return (
  <div>
  <Notification message={notification}/>
  <h1>Blogs</h1>
  <div> {user.name} is logged in &emsp;<button onClick={handleLogout}> Logout</button></div>
  {filteredBlogs.map(blog =>
    <Blog key={blog.id} blog={blog} setBlogs={setBlogs} blogs={blogs} />
  )}
  <div>
    <CreateForm  key={user.id} user={user} blogs={blogs} setBlogs={setBlogs} notification={notification} setNotification={setNotification}/>
    </div>
</div>
)
}
}


export default App