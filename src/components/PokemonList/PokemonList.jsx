import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './PokemonList.css'
import Pokemon from '../Pokemon/Pokemon';

export default function PokemonList() {

const [pokemonList,setPokemonList] = useState([]);
const [isLoading, setIsLoading] = useState(true);

const POKEDEX_URL ='https://pokeapi.co/api/v2/pokemon'

async function downloadPokemons(){
    const response = await axios.get(POKEDEX_URL); // This will download list of 20 Pokemon 
    //console.log(response.data);

    const pokemonResults = response.data.results;  // We get the array of Pokamon 
    //Iterrating over the array of Pokemons, and using their url, to create an array of promises
    // that will download those 20 pokemons
    const pokemonResultPromise = pokemonResults.map( (pokemon)=> axios.get(pokemon.url) );
    //passing that promise array to axios.all
    const pokemonData = await axios.all(pokemonResultPromise);   // Array of 20 Pokemon detailed Data 

       //console.log(pokemonData);
       // Now itterate on the data of each Pokemon, and extract id, name, image, types   
       const res = pokemonData.map( (pokeData) =>{
       const pokemon = pokeData.data;

       return{
        id:pokemon.id,
        name:pokemon.name,
        image:(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
        
        type: pokemon.types
       }
    });

   console.log(res);
   setPokemonList(res);

   setIsLoading(false);
}    

useEffect( ()=>{
  downloadPokemons();
},[]);

  

  return (
     <div className='pokemon-list-wrapper'>
     <div>Pokemon List</div>
      
     {
        
      (isLoading) ? 'Loading...' : pokemonList.map( (p)=> <Pokemon name={p.name} image={p.image} key={p.id}/> )

     }
     
     </div>
  )
}
