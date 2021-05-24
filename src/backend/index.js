const { response } = require('express')
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
app.use(express.json())
app.use(cors())

morgan.token("person", (req, res) => {
    return JSON.stringify(req.body);
  });

app.use(morgan(":method :url :status :res[content-length] - :response-time ms :person"))




/*const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
  }
  app.use(requestLogger)
 */

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "0700-123123"
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "02-02-02"

  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-44-55555"

  },
  {
    id: 4,
    name: "Mary PoppenDICK",
    number: "0700-666666"

  }
]
app.get('/', (request,response) => {
    response.send('<h1> EAT SHIIIITT </h1>')
})

app.get('/api/persons', (request,response) => {
    
    response.json(persons)
})
//GET
app.get('/info', (request,response) => {
    const koko = persons.length
    const date = new Date()
    const teksti = "Phonebook has info for "  + koko + ' people'
    response.send('<p>'+teksti+'</p><p>'+date+'</p>')
})

app.get('/api/persons/:id', (request,response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person){
        response.json(person)
    } else {
        response.status(404).send( { error: 'ERROR: Person not found with given id'})
    }
})
//DELETE
app.delete('/api/persons/:id', (request,response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)         // filteröi pois annetulla id:llä olevan henkilön
    response.status(204).end()  // REST-testattu, skulaa
})
//POST

app.post('/api/persons', (request, response) => {  // REST-testattu, toimii
    const body = request.body

    const person = {
      id: Math.floor(Math.random() * 10000),
      name: body.name,
      number: body.number
      
    }

    if (!body.name) {
        return response.status(400).send({ 
          error: 'Missing name' 
        })
      }
      if (!body.number) {
          return response.status(400).send({ 
            error: 'Missing phone number' 
          })
        }
        const nimi = body.name
        const listalla = persons.find(person => person.name === nimi)
        if (listalla){
            return response.status(400).send({
                error: "Phonebook already contains person '" + nimi + "'"
            })
        }

    console.log(body)
    persons = persons.concat(person)
  
    response.json(person)
  })

 /* 
 const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
  app.use(unknownEndpoint)
*/


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})