import ReactDOM from 'react-dom'
import App from './App.js'

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  },

]
// alla funktio saa arvoksi note:n ja palauttaa noten id:n
const result = notes.map(note => note.id)  // tämä käy listan läpi note notelta, ja tallentaa resultsiin note.id:t taulukoksi, jos vaihdetaan id => content, resultsiin tallentuu content
console.log(result)

ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
)