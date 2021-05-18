import React, { useEffect, useState } from 'react'
import Clear from './components/Clear'
import Filter from './components/Filter'
import AddPerson from './components/AddPerson'
import Person from './components/Person'
import ErrorNotification from './components/ErrorNotification'
import SuccesfullNotification from './components/SuccesfullNotification'
import axios from 'axios'



const App = () => {
  
  const [ persons, setPersons ] = useState([])   // tässä on lista henkilöistä jotka ovat puhelinluettelossa, aluksi tyhjä
  const [ newPerson, setNewPerson ] = useState()  // tätä tarvitaan uuden henkilön  nimen lisäämiseen
  const [ newNumber, setNewNumber ] = useState()  // tätä tarvitraan uuden henkilön numeron lisäämiseen
  const [ newFilter, setFilter ] = useState('')  // tässä on filtteri
  const [ errorMessage, setErrorMessage] = useState(null)  // passaa nämä ADDD:lle, deletelle ym
  const [ succesfullOperation, setSuccesfullOperation] = useState(null)
 
const baseUrl = 'http://localhost:3001/persons'
useEffect(() =>{
  axios
  .get(baseUrl)
  .then(response => {
    setPersons(response.data)
  })

},[])

  return (
    <div>
      <h1>Phonebook:</h1>  
      <ErrorNotification message = {errorMessage}/>   
      <SuccesfullNotification message = {succesfullOperation}/> 
       <Filter setFilter = {setFilter} />    
      <h1>Add a new:</h1>
         <AddPerson persons = {persons} setPersons = {setPersons} newPerson = {newPerson} setNewPerson = {setNewPerson}
          newNumber = {newNumber} setNewNumber = {setNewNumber} errorMessage = {errorMessage} setErrorMessage = {setErrorMessage}
          succesfullOperation = {succesfullOperation} setSuccesfullOperation = {setSuccesfullOperation}/>

      <h2>Numbers:</h2>
          <Person  setPersons ={setPersons} newFilter = {newFilter} persons = {persons} errorMessage = {errorMessage} setErrorMessage = {setErrorMessage} />
          <p>---------------------------------------</p>
          <Clear persons = {persons} setPersons = {setPersons} newPerson = {newPerson} setNewPerson = {setNewPerson} newNumber = {newNumber} setNewNumber = {setNewNumber}/>
    </div>
  )

}


export default App