


export default function Producto(props) {
    return (

        <div>

            <div>
                <img src={imagePath} alt="..." />
            </div>

            <button>Agregar al carrito</button>
            <p>{props.nombreProducto}</p>

        </div>

    )

}