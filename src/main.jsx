import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // This will enable router in whole project
    <BrowserRouter>
       <App />
    </BrowserRouter>
  
)
