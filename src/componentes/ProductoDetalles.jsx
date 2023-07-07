import { useContext, useState } from "react";
import { idElementoContexto } from "../contexto/ContextoIdElemento";
import { botonesContexto } from "../contexto/ContextoBotones";
import { carritoContexto } from "../contexto/ContextoCarrito";
import TituloProducto from "./TituloProducto";
import ImgProcucto from "./ImgProducto";
import PrecioProducto from "./PrecioProducto";
import Boton from "./Boton";
import CategoriaProducto from "./CategoriaProducto";
import DescripcionProducto from "./DescripcionProducto";
import ValoracionProducto from "./ValoracionProducto";
import '../estilos/productoDetalles.css'

function ProductoDetalles(){
    const { idElemento} = useContext(idElementoContexto);
    const { botones } = useContext(botonesContexto);
    const { cantidadBotonesCarrito } = useContext(carritoContexto);

    return (
        <>
        { idElemento.id !== undefined ? (
            <div className="productoDetalles">
                <TituloProducto dato={ idElemento } />
                <CategoriaProducto dato={ idElemento } />
                <div className="imgDetalle">
                    <ImgProcucto dato={idElemento} />
                    <DescripcionProducto dato={idElemento} />
                </div>
                <ValoracionProducto dato={idElemento} />
                <PrecioProducto dato={idElemento} />
                <div className="botonesProducto">
                    <Boton btn={botones[4]}/>
                    <Boton btn={botones[6]}/>
                    <p>{ cantidadBotonesCarrito }</p>
                    <Boton btn={botones[5]} />
                    <Boton btn={botones[7]} />

                </div>
            </div>
        ) : ( null )}
        </>

    );
};

export default ProductoDetalles;