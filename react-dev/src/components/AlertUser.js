import React from 'react'

function AlertUser(props) {
   
    return (
        props.alertMsg && <div className="alert alert-danger" role="alert">
        {props.alertMsg}
      </div>
    )
}

export default AlertUser