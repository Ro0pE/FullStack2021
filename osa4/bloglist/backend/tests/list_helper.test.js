
const listHelper = require('../utils/list_helper')

const emptyBloglist = []
const bloglistWithOneBlog = [
  {
    _id: '12345',
    title: 'Only blog in the list',
    author: 'Jari Pulli',
    url:
      'wwww.gg.com',
    likes: 10,
    __v: 0,
  },
]
const bloglistWithMultipleBlogs = [
  {
    _id: '666',
    title: 'Eka',
    author: 'Piripirkko',
    url:
      'www.thl.fi',
    likes: 5,
    __v: 0,
  },
  {
    _id: '111111',
    title: 'toka',
    author: 'Mikko metsästä',
    url:
      'www.maltsu.fi',
    likes: 10,
    __v: 0,
  },
  {
    _id: '126662225',
    title: 'kolmas',
    author: 'Mikko metsästä',
    url:
      'www.gg.fi',
    likes: 73,
    __v: 0,
  },
  {
    _id: '115566',
    title: 'neljäs',
    author: 'Keitiömestarin erikoinen',
    url:
      'www.kokkikolmonen.fi',
    likes: 1150,
    __v: 0,
  },

]
describe('dummy',() => {
  test('dummy returns one', () => {
    const blogs = []
    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
})
})
describe('total likes',() => {
  test('when bloglist is empty',() =>{
    const result = listHelper.totalLikes(emptyBloglist)
    expect(result).toBe(0)

})
})

describe('total likes,',() => {
  test('most liked blog', () => {
    const favBlog = listHelper.favoriteBlog(bloglistWithMultipleBlogs)
    expect(favBlog).toEqual({
      title: 'neljäs',
      author: 'Keitiömestarin erikoinen',
      likes: 1150,
    })
  })
})

describe('most blogs',() => {
  test('if there is no blogs',() => {
    const result = listHelper.mostBlogs(emptyBloglist)
    expect(result).toBe(null)
  })
  test('if there is only one blog in the list',()=>{
    const result = listHelper.mostBlogs(bloglistWithOneBlog)
    expect(result).toEqual({
      author: 'Jari Pulli',
      blogs: 1,
    })
  })
  test('author with the most blogs',() => {
    const result = listHelper.mostBlogs(bloglistWithMultipleBlogs)
    expect(result).toEqual(  {
      author: 'Mikko metsästä',
      blogs: 2,
    })
  })

})

describe('returns author with largest amount of likes', () => {
  test('when list has no blog equals null', () => {
    const result = listHelper.mostLikes(emptyBloglist)
    expect(result).toBe(null)
  })

  test('when list has only one blog equals the author of that', () => {
    const result = listHelper.mostLikes(bloglistWithOneBlog)
    expect(result).toEqual({
      author: 'Jari Pulli',
      likes: 10,
    })
  })

  test('when list has many blogs equals the right author', () => {
    const result = listHelper.mostLikes(bloglistWithMultipleBlogs)
    expect(result).toEqual({
      author: 'Keitiömestarin erikoinen',
      likes: 1150,
    })
  })
})


