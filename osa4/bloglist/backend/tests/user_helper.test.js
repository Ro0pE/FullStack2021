const { TestWatcher } = require('@jest/core')
const bcrypt = require('bcrypt')
const User = require('../models/userDB')
const helper = require('../utils/user_helper')

describe('when there is only one user', () => {
    beforeEach(async () => {
        jest.setTimeout(9999999999)
        await User.deleteMany({})
    
        const passwordHash = await bcrypt.hash('sekret', 10)
        const user = new User({ username: 'root', passwordHash })
    
        await user.save()
      })
      test('creation succeeds with a fresh username', async () => {
        const usersAtStart = await helper.usersInDb()
    
        const newUser = {
          username: 'mluukkai',
          name: 'Matti Luukkainen',
          password: 'salainen',
        }
    
        await api
          .post('/api/users')
          .send(newUser)
          .expect(200)
          .expect('Content-Type', /application\/json/)
    
        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)
    
        const usernames = usersAtEnd.map(u => u.username)
        expect(usernames).toContain(newUser.username)
      })
    })
    /*    test('creation fails and returns proper statuscode and message if username already exist', async () => {
            const userAtStart = await userHelper.usersInDb()

            const newUser = {
                username: 'testihenkilö',
                name: 'apina',
                password: '123',
              }
              const result = await api
              .post('/api/users')
              .send(newUser)
              .expect(400)
              .expect('Content-Type', /application\/json/)

              expect(result.body.error).toContain('`username` to be unique')

              const usersAtEnd = await userHelper.usersInDb()
              expect(usersAtEnd).toHaveLength(usersAtStart.length)
 
    }) */


