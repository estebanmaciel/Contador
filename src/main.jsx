import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contador from './componets/Contador.jsx'
import Title from './componets/Title.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Title title='Equipo A vs Equipo B'/>
      <div style= {{display:"flex", gap:"40px"}}>
        <div><Title title='Equipo A' />
          <div className='mt-3 border border-5'>
            <Contador tipoContador='Gol'/>
          </div>
          <div className='mt-3 border border-5'>
            <Contador tipoContador='Foul'/>
          </div>
          <div className='mt-3 border border-5'>
            <Contador tipoContador='Corner'/>
          </div>
        </div>
        <div><Title title='Equipo B' />
          <div className='mt-3 border border-5'>
            <Contador tipoContador='Gol'/>
          </div>
          <div className='mt-3 border border-5'>
            <Contador tipoContador='Foul'/>
          </div>
          <div className='mt-3 border border-5'>
            <Contador tipoContador='Corner'/>
          </div>
        </div>
      </div>
    </>
  </React.StrictMode>,
)
