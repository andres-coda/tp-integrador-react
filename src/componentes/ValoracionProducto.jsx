function ValoracionProducto( { dato } ){
    return (
        <>
            <h3>Valoración: { dato.rating.rate }</h3>
            <h3>Cantidad de votos: { dato.rating.count }</h3>
        </>
    );
}; 

export default ValoracionProducto;