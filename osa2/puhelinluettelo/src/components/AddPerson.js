import personService from '../services/persons'

const AddPerson = (props) => {
  
    const newPerson = props.newPerson
    const newNumber = props.newNumber
    const persons = props.persons
    const setPersons = props.setPersons
    const setNewPerson = props.setNewPerson
    const setNewNumber = props.setNewNumber
    const setSuccesfullOperation = props.setSuccesfullOperation
  

   

    const add = () => {   // lisätään henkilö, nimi,numero ja id
       
        const personObject = {  // uutta objektia tuosta
          name: newPerson,
          number: newNumber, 

        }




        
        var listalla = false;  // 

        
        for (let  i = 0; i < persons.length; i++){

         if (!(persons[i].name === personObject.name)){  // tutkitaan, onko henkilö jo puhelinluettelossa. Jos ei, niin lisätään ja jos on niin alerttia perään
           listalla = false;
       
         } else {
           if (typeof(personObject.name) !== 'undefined'){              
           listalla = true;
           let message = `Person ${personObject.name} is already added to phonebook, replace the old number with a new one?`
           let result = window.confirm(message)      
           if (result === true){ /// kun halutaan päivittää numero eli klikataan ok
            const person = persons.find(n=> n.id === persons[i].id)
            const updatedPerson =  {...person, number: newNumber}

            personService   // päivitetään databasen tieto
             .updateNumber(persons[i].id, updatedPerson)
             .then(returnedPerson => {
              setPersons(persons.map(person => person.id !== persons[i].id ? person : returnedPerson))
            })
         
           }
           if (result === false){
            
           }
     
         }
        }
      
        }

        
        if (!(listalla === true)){

          if (typeof(personObject.name) !== 'undefined'){
             personService    
             .addPerson(personObject)
             .then(response => {
              setPersons(persons.concat(response))
             })

             setSuccesfullOperation(`Added ${personObject.name} `) 
             setTimeout(() => {
               setSuccesfullOperation(null)
             }, 2000)
       
            } 
        }
    
        listalla = false;
      
      }
    
      const handleAddPerson = (event) => {  // lisää henkilölle nimi

        if (event.target.value.length > 0){

          setNewPerson(event.target.value)
        } 
      
     
      }
      
      const handleAddNumber = (event) => {  // lisää henkilölle numero
       
        setNewNumber(event.target.value)
     
      }
      


    return (
        <form onSubmit = {add}>
        <div>
          <p>Name: <input onChange={handleAddPerson}/></p> 
          <p>Number: <input onChange={handleAddNumber}/></p>
          <button type="submit">Add</button>
        </div>
        <ul>

        </ul>
      </form>

    )
}



export default AddPerson