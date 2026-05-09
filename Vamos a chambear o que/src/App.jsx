import { useState } from 'react'
import './App.css'
import Producto from './componentes/Producto/Producto'
import { PRODUCTOS } from './Datos-productos'
import Oferta from './componentes/Ofertas/Ofertas'
import { OFERTA } from './Datos-ofertas'

function App() {

  return (
    <>
    <div className='ofertas'>

      <Oferta
        {...OFERTA[0]}
        />
      <Oferta
        {...OFERTA[1]}
        />
      <Oferta
        {...OFERTA[2]}
        />
        </div>




<div className='productos'>

      <Producto
        {...PRODUCTOS[0]}
        />
      <Producto
        {...PRODUCTOS[1]}
        />
      <Producto
        {...PRODUCTOS[2]}
        />
      <Producto
        {...PRODUCTOS[3]}
        />
      <Producto
        {...PRODUCTOS[4]}
        />
      <Producto
        {...PRODUCTOS[5]}
        />
      <Producto
        {...PRODUCTOS[6]}
        />
      <Producto
        {...PRODUCTOS[7]}
        />
      <Producto
        {...PRODUCTOS[8]}
        />
        </div>
    </>
  )
}

export default App
