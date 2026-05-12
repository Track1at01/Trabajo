
import "./Producto.css"

export default function Producto({imagePath, precio, nombreProducto}) {
    return (

        <div className="principal">

            <div className="divImagen">
                <img src={imagePath} alt="..." />
            </div>

            <a href="#" className="btn-flip" data-back="Agregar" data-front={precio}></a>

            <div className="raya">
            <h3>{nombreProducto}</h3>

            </div>

           

        </div>

    )

}

// Lo que dio chatgpt para conectar el carrito con el producto.

/*  
const Producto = ({ id, name, price, image }) => {
    const { addItem } = useCart();

    return (
        <div>
            <h3>{name}</h3>
            <p>${price}</p>

            <button onClick={() => addItem(id)}>
                🛒 Agregar
            </button>
        </div>
    );
};

*/