import React from 'react'

const Person = ({ person }) => {
  const { id, name, age, image } = person;
  return (
    <React.Fragment>
      <li className='person'>
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
      </li>
    </React.Fragment>

  )
}

export default Person
