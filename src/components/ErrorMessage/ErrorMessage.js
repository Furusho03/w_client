import React from 'react'

const ErrorMessage = ({errors}) => {
  console.log("errorMessage component",errors)
  return (
    <div key="a">
      <div className="alert alert-danger">{errors.message}</div>
    </div>
  )
}

export default ErrorMessage
