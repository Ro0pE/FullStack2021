import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/react' 
import Blog from './Blog'
// nämä pitää vielä tarkistaa, että toimii!
test('renders title and author', () => {
  const blog = {
    title: 'testi',
    author: 'jartsa',
    url: 'testi'
  }

  const component = render(
    <Blog blog={blog} />
  )
  

  expect(component.title).toHaveTextContent(
    'testi'
  )
  expect(component.author).toHaveTextContent(
    'jartsa'
  )
})


test('renders title, author, url and likes when "view" is pressed', () => {
    const blog = {
      title: 'wtfwtwf',
      author: 'jartsa',
      url: 'testi',
      likes: 0
    }

    const mockHandler = jest.fn()
  
    const component = render(
      <Blog blog={blog} toggleVisibly={mockHandler}/>
    )
    const button = component.getByText('view')
      fireEvent.click(button)
    
  
    expect(component.title).toHaveTextContent(
      'testi'
    )
    expect(component.author).toHaveTextContent(
      'jartsa'
    )
    expect(component.url).toHaveTextContent(
        'testi'
      )
      expect(component.likes).toHaveValue(0)
    

  })
  




test('testing if likebutton is pressed twice', () => {
    const blog = {
      title: 'testi',
      author: 'jartsa',
      url: 'testi'
    }

    const mockHandler = jest.fn()
  
    const component = render(
      <Blog blog={blog} handeLikeBlog={mockHandler} />
    )

    const button = component.getByText('like')
      fireEvent.click(button)
      fireEvent.click(button)
    
  
      expect(mockHandler.mock.calls).toHaveLength(2)

  })