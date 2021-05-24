import React from 'react'

const SuccesfullNotification = ({ message }) => {
  
  if (message === null) {
    return null
  } else {

    console.log('message  ' , message)
  return (
    <div className="succesfull">
      {message}
    </div>
  )
} 
}




export default SuccesfullNotification