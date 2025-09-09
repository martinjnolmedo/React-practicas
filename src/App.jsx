import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListaUsuarios from './components/listaUsuarios.jsx'
import Botones from './components/botones.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Nav from './components/Nav.jsx'
import Gallery from './components/Gallery.jsx'
import Main from './components/Main.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div>
      <Header />
      <Nav />
      <Gallery />
      <Main />
      <Footer />
      <ListaUsuarios />
      <Botones />
    </div>

  )
}

export default App
