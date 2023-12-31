import { useContext } from "react";
import { subtituloContexto } from "../contexto/ContextoSubtitulo";
function Subtitulo(){
    const { subtitulo } = useContext(subtituloContexto) 
    return (
            <h1>{subtitulo.toUpperCase()}</h1>
    );
};

export default Subtitulo;