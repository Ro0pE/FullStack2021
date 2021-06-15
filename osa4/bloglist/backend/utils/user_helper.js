const User = require('../models/userDB')

//const { generateJwtToken } = require('../helpers')


const initialUsers = [
  {
    _id: '123',
    username: 'Roope',
    password: 'kameli123',
    name: 'Roope Roberto',
    blogs: ['Kuinka syöt wingsit raakana - 5 tapaa sairastaa salmonella']
  }
]

// const dummyAuthToken = () => generateJwtToken({ id: initialUsers[0]._id })

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(user => user.toJson())
}

module.exports = {
  initialUsers,
  usersInDb,
}