import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {token = `bearer ${newToken}`}

const getAllBlogs = async () => {
  const request = await axios.get(baseUrl)
  return request.data
}
const createBlog = async newObject => {
  const config = {
    headers: { Authorization: token },
  }
  
  
  const response = await axios.post(baseUrl, newObject, config)
  console.log('created')
  return response.data
}

const updateBlog = async (id, newObject) => {
  const config = {
    headers: { Authorization: token},
  }
  
  const request = await axios.put(`${baseUrl}/${id}`, newObject, config)
              
  console.log('updated')
  return request.data
  
}

const removeBlog = async (id) => {
  const config = {
    headers: { Authorization: token },
  }

  const request = await axios.delete(`${baseUrl}/${id}`, config)
  return request.data
}  

const exportObjects = { getAllBlogs, createBlog, setToken, updateBlog, removeBlog }

export default exportObjects