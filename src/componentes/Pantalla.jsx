import { useContext } from "react";
import { idElementoContexto } from "../contexto/ContextoIdElemento";
import Producto from "./Producto";
import CategoriasMenu from "./CategoriasMenu";
import '../estilos/pantalla.css';
import ProductoDetalles from "./ProductoDetalles";
import { pantallaContexto } from "../contexto/ContextoPantalla";
import Carrito from "./Carrito";

function Pantalla(){
    const { datos, categoriaActual } = useContext(idElementoContexto);
    const { pantalla } = useContext(pantallaContexto);
    return (
        <div className="pantalla">
            
            {pantalla === 0 ? (
                !datos.length ? ( <h2>Cargando...</h2> ) : (
                   datos.map((dato)=> {
                        if ((dato.category === categoriaActual) || (categoriaActual ==="todas")){
                            return <Producto key={dato.id} dato={dato}/>
                        } else { null}
                   }         
                    
                   )
                )
            ) : pantalla === 1 ? (
                <CategoriasMenu />
            ) : pantalla === 2 ? (
                <Carrito />
            ) : ( null )}

            <ProductoDetalles />

        </div>
    );
};

export default Pantalla;