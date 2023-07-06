import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ProvedorCarrito } from './contexto/ContextoCarrito.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProvedorCarrito>
      <App />
    </ProvedorCarrito>
  </React.StrictMode>,
)
