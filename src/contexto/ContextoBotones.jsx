import { createContext, useState, useEffect } from "react";
export const botonesContexto = createContext({});
export const ProvedorBotones= ({ children }) => {
    const [botones, setBotones] =useState([]);
    useEffect(() => {
        fetch("../../src/bd/Botones.json")
          .then(res => res.json())
          .then(data => {
            setBotones(data);
          })
          .catch(error => {
            // Manejar el error aquí
            console.error("Error en la solicitud:", error);
          });
      }, []);
    
    return (
        <botonesContexto.Provider value={ {botones, setBotones} } >
            {children}
        </botonesContexto.Provider>
    );
};