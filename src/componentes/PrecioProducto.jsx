function PrecioProducto( { dato } ){
    return (
        <p>$ { Number(dato.price).toFixed(2) }</p>
    )
};

export default PrecioProducto;