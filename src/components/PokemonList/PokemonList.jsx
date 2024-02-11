import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './PokemonList.css'
import Pokemon from '../Pokemon/Pokemon';

export default function PokemonList() {

const [pokemonList,setPokemonList] = useState([]);
const [isLoading, setIsLoading] = useState(true);

const [pokedexUrl,setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon');

const [nextUrl, setNextUrl] =useState('');
const [prevUrl, setPrevUrl] =useState('');



async function downloadPokemons(){
   setIsLoading(true);
    const response = await axios.get(pokedexUrl); // This will download list of 20 Pokemon 
    //console.log(response.data);

    const pokemonResults = response.data.results;  // We get the array of Pokamon 

    setNextUrl(response.data.next);
    setPrevUrl(response.data.previous);

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
},[pokedexUrl]);       // When pokedexUrl changes then then Use Effect -> re-execute

  

  return (
     <div className='pokemon-list-wrapper'>
     <div className='title'>Pokemon List</div> 

      <div className='pokemon-wrapper'> 
      { 
        (isLoading) ? 'Loading...' : pokemonList.map( (p)=> <Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/> ) 
      } 
      </div> 

      <div className='controls'>
         <button disabled={prevUrl===null}  onClick={()=>setPokedexUrl(prevUrl)}>Prev</button>
         <button disabled={nextUrl===null}  onClick={()=>setPokedexUrl(nextUrl)}>Next</button>
      </div>
      
     </div>
  )
}
