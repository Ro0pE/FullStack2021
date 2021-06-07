import personService from '../services/persons'




const Clear = (props) => {
  
const persons = props.persons




  // TÄMÄ EI TOIMI VIELÄ!! id on eri kuin i ja kun poistaa yhden kerrallaan niin jää "tyhjiä" paikkoja
  const deleteAll = () => {
    const testi = persons.length
    for (let  i = 1; i <= testi; i++){
    
    personService
    .deletePerson(i)

  }

}
  



  return (
    <>
    <button type="submit" onClick = {deleteAll}>Clear phonebook!</button>
    </>
  )
}

export default Clear