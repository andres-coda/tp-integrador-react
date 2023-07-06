import { useState } from 'react'
import './App.css'
import { ProvedorBotones } from './contexto/ContextoBotones'
import Navegador from './componentes/Navegador'
import Subtitulo from './componentes/Subtitulo'
import Pantalla from './componentes/Pantalla'
import { ProvedorSubtitulo } from './contexto/ContextoSubtitulo'
import { ProvedorIdElemento } from './contexto/ContextoIdElemento'
import { ProvedorPantalla } from './contexto/ContextoPantalla'

function App() {

  return (
    <>
      <ProvedorPantalla>
      <ProvedorIdElemento>
      <ProvedorBotones>
      <ProvedorSubtitulo>
      
        <Subtitulo/>
        <Navegador/>
        <Pantalla />
             
      </ProvedorSubtitulo>
      </ProvedorBotones>
      </ProvedorIdElemento> 
      </ProvedorPantalla>
    </>
  )
}

export default App
