import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Pokedex from '../components/Pokedex/Pokedex';
import PokemonsDetails from '../components/PokemonDetails/PokemonsDetails';

export default function CustomRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Pokedex />} /> 
        <Route path='/pokemon/:id' element={<PokemonsDetails />} />

    </Routes>
  );
}
