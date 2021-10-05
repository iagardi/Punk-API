import React from 'react'

import './Button.scss'

const Button = (props) => {
   const { buttonText } = props
   return (
      <button className="button">{buttonText}</button>
   )
}

export default Button
