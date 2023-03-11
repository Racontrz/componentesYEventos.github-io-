import React from 'react'

const Alert = ({alerta}) => {
  return (
    <div className={`alert alert-${alerta.color} mt-4`} > {alerta.sms} </div>
    
  )
}

export default Alert

