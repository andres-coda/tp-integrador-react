import { useContext } from "react";
import { botonesContexto } from "../contexto/ContextoBotones";
import Boton from "./Boton";


function Navegador(){
    const { botones, setBotones } = useContext(botonesContexto);

    return(
        <nav>
            {botones.map((btn)=>{
                if (btn.clase==="btn"){
                    return <Boton key={btn.id} btn={btn}/>
                } else {
                    return null;
                }
            })}
            
        </nav>

    );
};

export default Navegador;