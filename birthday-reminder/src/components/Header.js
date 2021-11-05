import React from 'react'

const Header = ({numPeople,onToggle}) => {
  return (
    <div className='div-header'>
      <h3>{numPeople} Birthdays today</h3>
      <button className='btn-birthday' onClick={onToggle}>Add Birthday</button>
    </div>
  )
}

export default Header
