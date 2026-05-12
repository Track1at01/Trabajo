import { useState } from 'react'
import './App.css'
import Producto from './componentes/Producto/Producto'
import { PRODUCTOS } from './Datos/Datos-productos'
import { CASCOS } from './Datos/Datos-cascos'
import Oferta from './componentes/Ofertas/Ofertas'
import { OFERTA } from './Datos/Datos-ofertas'
import "./componentes/Ofertas/OfertasCarrucel.css"
import Header from "./componentes/Header/Header"

function App() {
  const productsPerView = 6
  const [groupIndex, setGroupIndex] = useState(0)
  const productCount = PRODUCTOS.length
  const totalGroups = Math.ceil(productCount / productsPerView)
  const visibleProducts = PRODUCTOS.slice(
    groupIndex * productsPerView,
    (groupIndex + 1) * productsPerView
  )

  const handlePrevGroup = () => {
    setGroupIndex((index) => (index === 0 ? totalGroups - 1 : index - 1))
  }

  const handleNextGroup = () => {
    setGroupIndex((index) => (index === totalGroups - 1 ? 0 : index + 1))
  }

  const handleSelectGroup = (index) => {
    setGroupIndex(index)
  }

  const cascosPerView = 5
  const [cascoGroupIndex, setCascoGroupIndex] = useState(0)
  const cascoCount = CASCOS.length
  const totalCascoGroups = Math.ceil(cascoCount / cascosPerView)
  const visibleCascos = CASCOS.slice(
    cascoGroupIndex * cascosPerView,
    (cascoGroupIndex + 1) * cascosPerView
  )

  const handlePrevCascos = () => {
    setCascoGroupIndex((index) => (index === 0 ? totalCascoGroups - 1 : index - 1))
  }

  const handleNextCascos = () => {
    setCascoGroupIndex((index) => (index === totalCascoGroups - 1 ? 0 : index + 1))
  }

  const handleSelectCascos = (index) => {
    setCascoGroupIndex(index)
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
        <h2>¿Qué mejor manera de moverse?</h2>
        <div className='productos-carousel'>
          
          <button
            type='button'
            className='carousel-button prev'
            onClick={handlePrevGroup}
          >
            ‹
          </button>

          <div className='productos-display'>
            {visibleProducts.map((producto, index) => (
              <Producto
                key={groupIndex * productsPerView + index}
                {...producto}
              />
            ))}
          </div>

          <button
            type='button'
            className='carousel-button next'
            onClick={handleNextGroup}
          >
            ›
          </button>
        </div>

        <div className='carousel-dots'>
          {Array.from({ length: totalGroups }, (_, index) => (
            <button
              key={index}
              type='button'
              className={`carousel-dot ${index === groupIndex ? 'active' : ''}`}
              onClick={() => handleSelectGroup(index)}
              aria-label={`Mostrar grupo ${index + 1}`}
            />
          ))}
        </div>
      </div>

<div className='productos-carousel-section'>
        <h2>¿Casco? Traiganle una falda a la niña</h2>
        <div className='productos-carousel'>
          
          <button
            type='button'
            className='carousel-button prev'
            onClick={handlePrevCascos}
          >
            ‹
          </button>

          <div className='productos-display'>
            {visibleCascos.map((casco, index) => (
              <Producto
                key={cascoGroupIndex * cascosPerView + index}
                {...casco}
              />
            ))}
          </div>

          <button
            type='button'
            className='carousel-button next'
            onClick={handleNextCascos}
          >
            ›
          </button>
        </div>

        <div className='carousel-dots'>
          {Array.from({ length: totalCascoGroups }, (_, index) => (
            <button
              key={index}
              type='button'
              className={`carousel-dot ${index === cascoGroupIndex ? 'active' : ''}`}
              onClick={() => handleSelectCascos(index)}
              aria-label={`Mostrar grupo ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </main>
  )
}

export default App
