import React from 'react'

const ErrorNotification = ({ message }) => {

  if (message === null) {
    return null
  } else {

    console.log('message  ' , message)
  return (
    <div className="error">
      {message}
    </div>
  )
} 
}





export default ErrorNotification