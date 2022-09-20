import { createContext, useState, useEffect} from "react";
export const CartContext = createContext();

export const CartComponentContext = ({children}) => {

    const [listaProductosCarrito, setListaProductosCarrito] = useState([]);
    const [total, setTotal] = useState(0)
    const [totalCompra, setTotalCompra] = useState(0)

    const addItem = (objeto, cantidad) => {
        const isInCart = listaProductosCarrito.some( producto => producto.id === objeto.id )
        const nuevoProducto = {...objeto, cantidad}
        if(isInCart){
            const productoEstaDuplicado = listaProductosCarrito.map( producto => {
                if( producto.id === objeto.id ){
                    producto.cantidad += cantidad;
                    return producto;
                }
                return producto;
            })
            const nuevaListaProductos = [...productoEstaDuplicado]
            setListaProductosCarrito(nuevaListaProductos)
            
        }else{
            const listaProductos = [...listaProductosCarrito, nuevoProducto]
            setListaProductosCarrito(listaProductos)

        }
    }

   const removeItem = (itemId) => {
        const nuevaLista = listaProductosCarrito.filter( elemento => elemento.id !== itemId)
        setListaProductosCarrito(nuevaLista)
    }

   const clear = () => {
        setListaProductosCarrito([])
   }

   const totalArticulos = () => {
     const valoresTotales = listaProductosCarrito.reduce( (total, producto) => total + producto.cantidad, 0)
     setTotal(valoresTotales)
   }

   const totalAPagar = () => {
    const precioTotal = listaProductosCarrito.reduce( (total, producto) => total + (producto.price * producto.cantidad) , 0)  
    setTotalCompra(precioTotal)
    }

   useEffect(() => {
    totalArticulos();
    totalAPagar();
   }, [listaProductosCarrito]);

    return(
        <CartContext.Provider value={{addItem, removeItem, clear, listaProductosCarrito, total, totalCompra}}>
            {children}
        </CartContext.Provider>
    )
}