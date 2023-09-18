import React, { useState } from 'react'
import './Search.css'
import useDebounce from '../../hooks/useDebounce'

export default function Search( {updateSearchTerm} ) {

 const debouncedCallBack = useDebounce(   (e) =>updateSearchTerm(e.target.value) )

  return (
      <div className='search-wrapper'>
        
        <input
           id='pokemon-name-search'
          type='text'
          placeholder='Pokemon name.......'
          
          onChange={debouncedCallBack }
          
        
        />

        

      </div>
  )
}
