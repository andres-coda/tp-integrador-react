import ImgProcucto from "./ImgProducto";
import PrecioProducto from "./PrecioProducto";
import TituloProducto from "./TituloProducto";
import { useContext } from "react";
import '../estilos/producto.css'
import { idElementoContexto } from "../contexto/ContextoIdElemento";
import { carritoContexto } from "../contexto/ContextoCarrito";

function Producto({ dato }){
    const { setIdElemento, datos } = useContext(idElementoContexto)
    const { carrito, setCantidadBotonesCarrito } = useContext(carritoContexto)
    const divClick = (e) => {
        const btn= e.currentTarget.id;
        setIdElemento(datos[btn-1]);
        setCantidadBotonesCarrito(0);
        if (carrito.length>0){
            carrito.map((dato)=> {
                if (dato.id===datos[btn-1].id){
                    setCantidadBotonesCarrito(Number(dato.cantidad));
                }
            });
        }
    }
    return (
        <div className="producto" onClick={ divClick } id={dato.id}>
            <TituloProducto dato={ dato } />
            <ImgProcucto dato={ dato } />
            <PrecioProducto dato={ dato } />
        </div>
    );
};

export default Producto;