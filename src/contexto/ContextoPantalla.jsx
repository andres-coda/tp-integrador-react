import { createContext, useState } from "react";
export const pantallaContexto = createContext({});
export const ProvedorPantalla= ({ children }) => {
    const [ pantalla, setPantalla ] = useState(0)
    return (
        <pantallaContexto.Provider value={ {pantalla, setPantalla} } >
            {children}
        </pantallaContexto.Provider>
    );
};