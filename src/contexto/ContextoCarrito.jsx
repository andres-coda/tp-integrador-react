import { createContext, useState } from "react";
export const carritoContexto = createContext({});
export const ProvedorCarrito= ({ children }) => {
    const [ carrito, setCarrito] = useState([]);
    const [ verificacion, setVerificacion ] = useState(false);
    const [ total , setTotal ] = useState(0);
    const [ cantidadCarrito, setCantidad ] = useState(0);
    const [ cantidadBotonesCarrito, setCantidadBotonesCarrito ] =useState(0);
    const [ cantidadBtnActual, setCantidadBtnActual ] = useState(0);
    return (
        <carritoContexto.Provider value={ { carrito, setCarrito, verificacion, setVerificacion, total, setTotal, cantidadCarrito, setCantidad, cantidadBotonesCarrito, setCantidadBotonesCarrito, cantidadBtnActual, setCantidadBtnActual  } } >
            {children}
        </carritoContexto.Provider>
    );
};