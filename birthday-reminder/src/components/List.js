import React from 'react'
import Person from './Person'

const List = ({people}) => {
  return (
    <ul className='listOf-items'>
         {people.map((person) => {
            return <Person key={person.id} person={person}/>
         })}
    </ul>
  )
}

export default List
