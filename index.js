const express = require('express')
const cors = require('cors')
require('dotenv').config()
const Person = require('./models/person')


const app = express()
const morgan = require('morgan')


app.use(express.static('build'))
app.use(cors())
app.use(express.json())

const errorHandler = (error, request, response) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).send({ error: error.message })
    }
 

}


morgan.token('person', (req) => {
    return JSON.stringify(req.body)
})




const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}
app.use(requestLogger)

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :person'))





let persons = [
    {
        id: 1,
        name: 'Arto Hellas',
        number: '0700-123123'
    },
    {
        id: 2,
        name: 'Ada Lovelace',
        number: '02-02-02'

    },
    {
        id: 3,
        name: 'Dan Abramov',
        number: '12-44-55555'

    },
    {
        id: 4,
        name: 'Mary PoppenDICK',
        number: '0700-666666'

    }
]



app.get('/api/persons', (request, response) => {  // näytä database
    Person.find({})
        .then(persons => {
            response.json(persons)
        })
})
//GETa
app.get('/info', (request, response, next) => {  // näytä info, monta henkeä ym..
    const date = new Date()
    Person.countDocuments()
        .then(result => {
            const viesti = `<p>Phonebook has info for   ${result}   people</p><p>${date}</p>`
            response.send(viesti)
        })
        .catch(error => {
            next(error)
        })




})

app.get('/api/persons/:id', (request, response, next) => {  // näytä tietty henkilö id:llä
    Person.findById(request.params.id).then(person => {
        if (person) {
            response.json(person)
        } else {
            response.status(404).send({ error: 'ERROR: Person not found with given id' })
        }

    })
        .catch(error => {
            console.log('ERROR: tarkista antamsi "id" ')
            next(error)
        })
})

app.delete('/api/persons/:id', (request, response, next) => {  // poista henkilö

    Person.findByIdAndRemove(request.params.id)
        .then(result => {
            console.log(result)
            response.status(204).end()  // REST-testattu, skulaa
        })
        .catch(error => next(error))


})
//POST

app.post('/api/persons', (request, response, next) => {  // REST-testattu, toimii    **  Lisää henkilö
    const body = request.body
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

    const person = new Person({
        name: body.name,
        number: body.number,

    })


    if (body.name && body.number) {

        person.save().
            then(savedPerson => {
                persons = persons.concat(savedPerson)
                response.json(savedPerson)


            }).catch(error => next(error))
    }



    /*    const nimi = body.name
      const listalla = persons.find(person => person.name === nimi)
      if (listalla){
          return response.status(400).send({
              error: "Phonebook already contains person '" + nimi + "'"
          })
      }
*/

})
//PUT
/* app.put('/api/persons/:id', (request, response, next) => {
   
    const body = request.body
  
    const person = new Person ({
      number: body.number
    })
  
    Person.findByIdAndUpdate(request.params.id, person, { new: true })
  

      .then(updatedPerson => {
        response.json(updatedPerson.toJSON())
      })
      .catch(error => next(error))
  })
*/
app.use(errorHandler)

// eslint-disable-next-line no-undef
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
