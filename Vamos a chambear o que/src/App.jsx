import { useState } from 'react'
import './App.css'
import Producto from './componentes/Producto/Producto'
import { PRODUCTOS } from './Datos-productos'
import Oferta from './componentes/Ofertas/Ofertas'
import { OFERTA } from './Datos-ofertas'

function App() {

  return (
    <main>
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

<div className='grano'>
<p>si llevas 3 te regalan <h2>SEXO GRATIS</h2> en el local de al lado</p>

</div>


<div className='productos'>
      {PRODUCTOS.map((producto, index) => (
        <Producto
          key={index}
          {...producto}
        />
      ))}
        </div>
    </main>
  )
}

export default App
