import React, { useState } from 'react'
import './Pokedex.css'
import Search from '../Search/Search'
import PokemonList from '../PokemonList/PokemonList'
import PokemonsDetails from '../PokemonDetails/PokemonsDetails';

export default function Pokedex() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className='pokedex-wrapper'>
       
       <Search updateSearchTerm={setSearchTerm} />
       {/* {(searchTerm.length==0) ? <PokemonList/> :''} */}
        
      { (!searchTerm) ? <PokemonList /> : <PokemonsDetails key={searchTerm} pokemonName={searchTerm} />}

    </div>
    
  )
}
