import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import JugadorList from './components/JugadorList'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'


function App() {
  
  return (
    <div>
    <Header/>
    <h1>Vota por tu favorito</h1>
    <Navbar/>
    <JugadorList/>
    <Footer/>
    </div>
  )
}

export default App
