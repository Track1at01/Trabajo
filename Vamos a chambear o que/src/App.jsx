import { useState } from 'react'
import './App.css'
import Producto from './componentes/Producto/Producto'
import { PRODUCTOS} from './Datos-productos'

function App() {
 
  return (
    <>
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
    </>
  )
}

export default App
