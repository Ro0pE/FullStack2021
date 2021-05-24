import personService from '../services/persons'

const Person = (props) => {  // printtaa henkilöt ja niiden numerot
    const setErrorMessage = props.setErrorMessage
    const persons = props.persons


    const deletePerson = (id) => {
      const person = persons.find(n => n.id === id)
      if (typeof(id) !== 'undefined') {
      const newList = props.persons.filter((person) => person.id !== id);
      console.log(newList)

      personService
      .deletePerson(id)
      .then(deletedPerson => {
        props.setPersons(newList)
    
      })
      .catch(error => {
        setErrorMessage(
          `Information of '${person.name}' has already been removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })    

    } 
      
    }
    
    const personsToShow = false     // filtteröidään, joko näytetään kaikki, tai näytetään filtteröity lista > person.name sisältää (filtterin setit)

    ? props.persons
    : props.persons.filter(person => person.name.toLowerCase().includes(props.newFilter.toLowerCase())) // muutetaan kaikki pieniksi kirjaimiksi niin ei oo kirjainkoolla väliä



    return (
        <div>
        {personsToShow.map(tyyppi =>
            <li className ='person' key = {tyyppi.id}>{tyyppi.name}  {tyyppi.number} <button onClick = {deletePerson.bind(this, tyyppi.id)}>  delete  </button> </li>
           
                 
     )} 
      </div>
    )
  }

  export default Person