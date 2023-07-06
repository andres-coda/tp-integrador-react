import { createContext, useState, useEffect } from "react";
export const idElementoContexto = createContext({});
export const ProvedorIdElemento= ({ children }) => {
    const [datos, setDatos] = useState([]);
    const [idElemento, setIdElemento] = useState({});
    const [categorias, setCategorias] = useState([]);
    const [ categoriaActual, setCategoriaActual ] = useState("todas");
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then(res => res.json())
          .then(data => {
            setDatos(data);
            let arrayCategorias = data.reduce((uniqueCategories, item) => {
              if (!uniqueCategories.includes(item.category)) {
                uniqueCategories.push(item.category);
              }
              return uniqueCategories;
            }, []);
            arrayCategorias.push("todas");
            setCategorias(arrayCategorias);
          });
      }, []);
    return (
        <idElementoContexto.Provider value={ {idElemento, setIdElemento, categorias, setCategorias, datos, setDatos, categoriaActual, setCategoriaActual} } >
            {children}
        </idElementoContexto.Provider>
    );
};