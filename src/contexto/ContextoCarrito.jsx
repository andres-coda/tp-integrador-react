import { createContext, useState } from "react";
export const carritoContexto = createContext({});
export const ProvedorCarrito= ({ children }) => {
    const [ carrito, setCarrito] = useState([]);
    const [ total , setTotal ] = useState(0);
    const [ cantidadCarrito, setCantidad ] = useState(0);
    const [ cantidadBotonesCarrito, setCantidadBotonesCarrito ] =useState(0);
    return (
        <carritoContexto.Provider value={ { carrito, setCarrito, total, setTotal, cantidadCarrito, setCantidad, cantidadBotonesCarrito, setCantidadBotonesCarrito  } } >
            {children}
        </carritoContexto.Provider>
    );
};