import { useState } from 'react'
import './App.css'
import Producto from './componentes/Producto/Producto'
import { PRODUCTOS } from './Datos-productos'
import Oferta from './componentes/Ofertas/Ofertas'
import { OFERTA } from './Datos-ofertas'
import "./componentes/Ofertas/OfertasCarrucel.css"
import Header from "./componentes/Header/Header"

function App() {
  const [productIndex, setProductIndex] = useState(0)
  const productCount = PRODUCTOS.length
  const currentProduct = PRODUCTOS[productIndex]

  const handlePrevProduct = () => {
    setProductIndex((index) => (index === 0 ? productCount - 1 : index - 1))
  }

  const handleNextProduct = () => {
    setProductIndex((index) => (index === productCount - 1 ? 0 : index + 1))
  }

  const handleSelectProduct = (index) => {
    setProductIndex(index)
  }

  return (


    <main>
        <Header />


      <div className='ofertas'>
        <div className='carousel basic'>
          <div className='group'>
            {OFERTA.map((oferta, index) => (
          <Oferta
            key={index}
            {...oferta}
          />
        ))}
          </div>
        </div>
      </div>

      <div className='grano'>
        <p>si llevas 3 te ofrecen <h2>SEXO GRATIS</h2> en el local de al lado</p>

      </div>


      <div className='productos-carousel-section'>
        <h2>Productos</h2>
        <div className='productos-carousel'>
          <button
            type='button'
            className='carousel-button prev'
            onClick={handlePrevProduct}
          >
            ‹
          </button>

          <div className='producto-display'>
            <Producto {...currentProduct} />
          </div>

          <button
            type='button'
            className='carousel-button next'
            onClick={handleNextProduct}
          >
            ›
          </button>
        </div>

        <div className='carousel-dots'>
          {PRODUCTOS.map((_, index) => (
            <button
              key={index}
              type='button'
              className={`carousel-dot ${index === productIndex ? 'active' : ''}`}
              onClick={() => handleSelectProduct(index)}
              aria-label={`Mostrar producto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
