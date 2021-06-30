import React from 'react'
import PropTypes from 'prop-types'

const Notification = ({ message }) => {

    Notification.propTypes = {
        message: PropTypes.string.isRequired
    }
    if (message === '') {
      return null
    }
    
  
    return (
      <div className="error">
        {message}
      </div>
    )
  }



  export default Notification