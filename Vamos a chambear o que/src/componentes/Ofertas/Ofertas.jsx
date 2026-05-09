import './Ofertas.css'

export default function Oferta({ imagePath, descuento, nombreProducto }) {
    return (
        <div>
            <div className="divDescuento">
                <h2>{descuento}</h2>
                <img src={imagePath} alt="" />
            </div>

            <h2>{nombreProducto}</h2>
        </div>

    )
}