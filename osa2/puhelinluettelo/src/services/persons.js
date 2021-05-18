
import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  }
const addPerson = (personObject) => {
      const request = axios.post(baseUrl, personObject)
      return request.then(response => response.data)     
  }
const updateNumber = (id, personObject) => {
    const request = axios.put(`${baseUrl}/${id}`,personObject)  // baseurl/id == esim 'http://localhost:3001/persons/2'
    return request.then(response => response.data)
  }
const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)  // baseurl/id == esim 'http://localhost:3001/persons/2'
    return request.then(response => response.data)
  }



  // eslint-disable-next-line import/no-anonymous-default-export
  export default   { getAll, updateNumber, deletePerson, addPerson } // muista kaarisulkeet!

 // export default { getAll, create, update, setToken } 
 // { getAll, updateNumber, deletePerson, addPerson }