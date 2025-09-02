import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListaUsuarios from './components/listaUsuarios.jsx'
import Botones from './components/botones.jsx'


function App() {

  return (
    <div>
      <ListaUsuarios />
      <Botones />
    </div>

  )
}

export default App
