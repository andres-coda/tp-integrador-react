import { useContext } from "react";
import { subtituloContexto } from "../contexto/ContextoSubtitulo";
import { idElementoContexto } from "../contexto/ContextoIdElemento";
import { carritoContexto } from "../contexto/ContextoCarrito";
import { pantallaContexto } from "../contexto/ContextoPantalla";
import '../estilos/boton.css'
function Boton( { btn } ){
    const { setIdElemento, idElemento, setCategoriaActual } = useContext(idElementoContexto);
    const { setSubtitulo } = useContext(subtituloContexto);
    const { carrito, setCarrito, total, setTotal, cantidadCarrito, setCantidad, setCantidadBotonesCarrito, cantidadBtnActual, setCantidadBtnActual } = useContext(carritoContexto);
    const { setPantalla } = useContext(pantallaContexto);
    let nuevaCantidad=cantidadCarrito;
    const btnClick= (e) => {
        let cantidad=0;
        let nuevoCarrito=[];
        const btn = Number(e.target.id);
        console.log(nuevaCantidad);
        switch (btn){
            case 0:
                setSubtitulo("INICIO");
                setPantalla(0);
                setCategoriaActual("todas")
            break;
            case 1: 
                setSubtitulo("CATEGORIAS");
                setPantalla(1);
            break;
            case 2:
                setSubtitulo("CARRITO");
                setPantalla(2);
            break;
            case 3:
                setSubtitulo("gracias por su compra");
                setPantalla(0);
                setCantidad(0);
                setCarrito([]);
                setTotal(0);
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
            break;
            case 4:
                setIdElemento({});
            break;
            case 5:
            /*    if (carrito.length>0){
                    carrito.map((dato)=>{
                        if (dato.id===idElemento.id){
                            cantidad=dato.cantidad;
                        }
                    });
                } 
                setCantidadBtnActual(cantidadBtnActual+1);
                setCantidadBotonesCarrito(cantidad+cantidadBtnActual);*/
                if (carrito.length>0){
                    nuevoCarrito=carrito.map((dato)=>{
                        if (dato.id===idElemento.id){
                            dato.cantidad+=1;
                            cantidad=dato.cantidad;
                            setCantidadBotonesCarrito(dato.cantidad);
                        }
                        return dato;
                    });
                    if (cantidad===0){
                        let nuevo = {...idElemento, "cantidad": 1 };
                        nuevoCarrito.push(nuevo);
                        setCantidadBotonesCarrito(1);
                    }
                    setTotal(total+Number(idElemento.price));
                    setCantidad(nuevaCantidad+=1);
                    setCarrito(nuevoCarrito); 
                } else {
                    setCantidad(nuevaCantidad+=1);
                    setTotal(total+Number(idElemento.price));
                    setCarrito([{...idElemento, "cantidad": 1 }]);
                    setCantidadBotonesCarrito(1);
                }
            break;
            case 6:
                nuevoCarrito = carrito.filter((dato) => {
                    if (dato.id === idElemento.id) {
                      dato.cantidad -= 1;
                      if (dato.cantidad>=0){
                          setCantidadBotonesCarrito(dato.cantidad);
                      }
                      return dato.cantidad > 0;
                    }
                    return true;
                  });
                  setTotal(total-Number(idElemento.price));
                  
                  if (nuevaCantidad<=0){
                    setCantidad(0);
                  } else { 
                    setCantidad(nuevaCantidad-=1);
                  }
                  setCarrito(nuevoCarrito);

            break;
            case 7:
                setIdElemento({});
            break;
            default:
                setCategoriaActual(e.target.id)
                setSubtitulo(e.target.id);
                setPantalla(0);
            break;
        }

    }
    return(
        
        <button className={ btn.clase } id={ btn.id } onClick={ btnClick } >
            { btn.texto.toUpperCase() }{ cantidadCarrito!= 0 && btn.id === 2 ? (
                <p className="carritoBoton">{cantidadCarrito}</p>
                ): (null)    
            }
        </button>
            
    );
};

export default Boton;