import { useContext } from "react";
import { idElementoContexto } from "../contexto/ContextoIdElemento";
import Boton from "./Boton";
import '../estilos/categoriasMenu.css'
function CategoriasMenu(){
    const { categorias } = useContext(idElementoContexto);
    return (
        <div className="categoriaMenu">
        {categorias.map((dato, index)=>(
            <Boton key={index} btn={{"id":dato, "clase":"categoria", "texto": dato}}/>
        )
        )}
        </div>
    );
};

export default CategoriasMenu;