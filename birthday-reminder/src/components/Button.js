import React from 'react'

const Button = ({onClick, className}) => {
  return (
    <React.Fragment>
         <button onClick={onClick} className={className}>
            Clear All
         </button>
    </React.Fragment>
  )
}

export default Button
