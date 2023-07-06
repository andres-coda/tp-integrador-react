import { createContext, useState } from "react";
export const subtituloContexto = createContext({});
export const ProvedorSubtitulo= ({ children }) => {
    const [subtitulo, setSubtitulo] = useState("pantalla Inicial");
    return (
        <subtituloContexto.Provider value={ {subtitulo, setSubtitulo} } >
            {children}
        </subtituloContexto.Provider>
    );
};