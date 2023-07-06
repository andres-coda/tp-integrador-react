import { useContext, useState } from "react";
import TituloProducto from "./TituloProducto";
import PrecioProducto from "./PrecioProducto"
import { carritoContexto } from "../contexto/ContextoCarrito";
import { botonesContexto } from "../contexto/ContextoBotones";
import { idElementoContexto } from "../contexto/ContextoIdElemento";
import ProductoDetalles from "./ProductoDetalles";
import '../estilos/carrito.css'
import Boton from "./Boton";

function Carrito(){
    const { carrito, total, setVerificacion } = useContext(carritoContexto);
    const { botones } = useContext(botonesContexto);
    const { idElemento, setIdElemento, datos } = useContext(idElementoContexto);
    
    const clickTabla = (e) =>{
        let btn = e.currentTarget.id;
        console.log(e.currentTarget.id);
        console.log(datos[btn-1]);
        setIdElemento(datos[btn-1]);
        setVerificacion(false);
        if (carrito.length>0){
            carrito.map((dato)=> {
                if (dato.id===datos[btn-1].id){
                    setVerificacion(true);
                }
            });
        }
    }
    return (
        <>
        <div className="carrito">
            <table>
                <thead>
                    <tr>
                        <th>
                            <p>Cantidad</p>
                        </th>
                        <th colSpan="3">
                            <TituloProducto dato={{"title": "Producto"}} />
                        </th>
                        <th>
                            <p>Precio</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { carrito.map((dato) => (
                        <tr key={dato.id} onClick={clickTabla} id={dato.id}>
                            <td>
                                <p> {dato.cantidad} </p>
                            </td>
                            <td colSpan="3">
                                <TituloProducto dato={dato}/>
                            </td>
                            <td>
                                <PrecioProducto dato={dato}/>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="5">
                            <h3>TOTAL: $ { total.toFixed(2) }</h3>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Boton btn={botones[3]}/>
        </div>
        <ProductoDetalles />
        </>
    );
};

export default Carrito;