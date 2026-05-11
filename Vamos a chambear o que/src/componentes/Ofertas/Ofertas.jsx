import './Ofertas.css'

export default function Oferta({ imagePath, descuento, nombreProducto }) {
    return (
        <div className="card">
            <div className="divDescuento">
                <h2>{descuento}</h2>
                <img src={imagePath} alt="" />
            </div>

            <h6>{nombreProducto}</h6>
        </div>

    )
}