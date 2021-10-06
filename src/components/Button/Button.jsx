import React from 'react'

import './Button.scss'

const Button = (props) => {
   const { buttonText, action } = props
   return (
      <button className="button" onClick={action}>{buttonText}</button>
   )
}

export default Button
