import React from 'react'

import './Button.scss'

const Button = (props) => {
   const { buttonText, action, classAdd } = props
   return (
      <button onClick={action} className="button"> {buttonText}</button >
   )
}

export default Button
