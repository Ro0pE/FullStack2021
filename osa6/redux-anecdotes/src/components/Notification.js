

import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
console.log(props.notification)
if (props.notification !== null) {
  return (
    <div className="notification">
      {props.notification}
    </div>
  )
} else {
  return (
    <div>
      {props.notification}
    </div>
  )

}

}

const mapStateToProps = (state) => {
  return { notification: state.notification }
}

export default connect(mapStateToProps)(Notification)