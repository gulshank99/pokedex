import React from 'react'
import './Pokemon.css'
export default function Pokemon({name,image}) {
  return (
    <div className='pokemon-data'>
 
     <div>{name}</div>
     <div><img src={image}  /></div>

    </div>
     
  )
}
