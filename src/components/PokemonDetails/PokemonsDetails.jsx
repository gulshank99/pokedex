import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PokemonDetails.css';

async function downloadPokemon(pokemonName, id, setPokemon) {
    try {
        let response;
        if (pokemonName) {
            response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        } else {
            response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        }

        setPokemon({
            name: response.data.name,
            image: response.data.sprites.other.dream_world.front_default,
            weight: response.data.weight,
            height: response.data.height,
            types: response.data.types.map((t) => t.type.name),
        });

    } catch (error) {
        console.log('something went wrong');
    }
}

export default function PokemonsDetails({ pokemonName }) {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        downloadPokemon(pokemonName, id, setPokemon);
    }, [id, pokemonName]);

    return (
        <>
            <div className='pokemon-details-wrapper'>
                <div className='pokemon-image'>
                    <img src={pokemon.image} alt={pokemon.name} />
                </div>

                <div className='pokemon-detail-name'>
                    <span>{pokemon.name}</span>
                </div>

                <div className='pokemon-attr pokemon-detail-name'>
                    <div>
                        Height: {pokemon.height}
                    </div>

                    <div>
                        Weight: {pokemon.weight}
                    </div>
                </div>

                <div className='pokemon-details-types'>
                    <h3>Type:</h3>
                    {pokemon.types && pokemon.types.map((t) => <div className='type' key={t}> {t} </div>)}
                </div>
            </div>
        </>
    );
}



// .////////////////////////////////////////////////////////////.






// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom' 
// import './PokemonDetails.css'


// export default function PokemonsDetails( { pokemonName} ) {
//     const {id} = useParams();
//     const [pokemon, setPokemon] = useState({});

//     async function downloadPokemon() {
//         try {
//             let response;
//             if(pokemonName) {
//                 response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
//             } else {
//                 response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
//             }
           
//             setPokemon({
//                 name: response.data.name,
//                 image: response.data.sprites.other.dream_world.front_default,
//                 weight: response.data.weight,
//                 height: response.data.height,
//                 types: response.data.types.map((t) => t.type.name),
                
//             });

            
//         } catch(error) {
//             console.log('something went')
//         }

//         useEffect(() => {
//             downloadPokemon();
//         }, [id, pokemonName]);


//   return (

//     <>
    

//      <div className='pokemon-details-wrapper'> 

//         <div className='pokemon-image'>
//             <img src={pokemon.image} />
//         </div>

//         <div className='pokemon-detail-name'>
//            <span>{pokemon.name}</span> 
//         </div>

//         <div className='pokemon-attr  pokemon-detail-name'>
//             <div>
//                 Height: {pokemon.height} 
//             </div>

//             <div>
//               Weight: {pokemon.weight} 
//             </div>

//         </div>

//         <div className='pokemon-details-types'>
//             <h3>Type:</h3> 
//             {
//              pokemon.types && pokemon.types.map( (t)=> <div className='type' key={t}> {t} </div>)
//             }
//         </div>
//     </div>

//         {/* <div className='similar-pokemons'>
//             <h2> Similar pokemons </h2>
//             <div className='pokemon-similar-boxes'>
//                 {pokemonListState.pokemonList.length > 0 && 
//                      pokemonListState.pokemonList.map(pokemon => <Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image} id={pokemon.id} />)
//                 }
//             </div>
//         </div> */}

//     </>
//   )
//  }
// }




 
 