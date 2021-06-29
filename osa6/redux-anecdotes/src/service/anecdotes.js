
import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'


console.log('servu')
const getAll = async () => {
  const response = await axios.get(baseUrl)
  console.log('anecdotes @ db ', response.data)
  return response.data
}

const createNew = async content => {
  const object = { content, votes: 0 }
 
  const response = await axios.post(baseUrl, object)
  console.log('new anecdote: ' , response.data)
  return response.data
}

const vote = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject)
  console.log('voted anecdote', response.data)
  return response.data
}

export default { getAll, createNew, vote }