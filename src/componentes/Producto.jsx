import ImgProcucto from "./ImgProducto";
import PrecioProducto from "./PrecioProducto";
import TituloProducto from "./TituloProducto";
import Boton from "./Boton";
import { useContext } from "react";
import { botonesContexto } from "../contexto/ContextoBotones";
import '../estilos/producto.css'
import { idElementoContexto } from "../contexto/ContextoIdElemento";
import { carritoContexto } from "../contexto/ContextoCarrito";
import ProductoDetalles from "./ProductoDetalles";

function Producto({ dato }){
    const { setIdElemento, datos, idElemento } = useContext(idElementoContexto)
    const { carrito, setVerificacion, setCantidadBotonesCarrito,cantidadBtnActual } = useContext(carritoContexto)
    const { botones } = useContext(botonesContexto);
    const divClick = (e) => {
        const btn= e.currentTarget.id;
        setIdElemento(datos[btn-1]);
        setVerificacion(false);
        setCantidadBotonesCarrito(0);
        setCantidadBtnActual(0);
        if (carrito.length>0){
            carrito.map((dato)=> {
                if (dato.id===datos[btn-1].id){
                    setVerificacion(true);
                    setCantidadBotonesCarrito(dato.cantidad);
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