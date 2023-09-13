import { useState } from 'react'
import './App.css' 
import CustomRoutes from './Routes/CustomRoutes'
import { Link } from 'react-router-dom';
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='outer-pokedex'> 
     {/*  COMMENT : To use Routing  */}
     <h1 id="pokedex-heaading">
     <Link to='/'>  
       Pokedex
     </Link>   
      </h1>  
     < CustomRoutes />

    </div>
  )
}

export default App
