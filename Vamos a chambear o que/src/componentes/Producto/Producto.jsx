
import "./Producto.css"

export default function Producto({imagePath, nombreProducto}) {
    return (

        <div className="principal">

            <div>
                <img src={imagePath} alt="..." />
            </div>

            <button>Agregar al carrito</button>
            <h3>{nombreProducto}</h3>

           

        </div>

    )

}