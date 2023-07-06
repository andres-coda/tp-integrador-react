import { useContext } from "react";
import { idElementoContexto } from "../contexto/ContextoIdElemento";
function ImgProcucto( { dato } ){
    const { idElemento } = useContext(idElementoContexto);
    return (
        <img src={dato.image} alt={dato.title} />
    );
};

export default ImgProcucto;