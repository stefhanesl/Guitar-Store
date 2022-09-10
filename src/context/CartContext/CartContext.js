import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartComponentContext = ({children}) => {

    /* addItem(item, quantity) // agregar cierta cantidad de un ítem al carrito
    removeItem(itemId) // Remover un item del cart por usando su id
    clear() // Remover todos los items
    isInCart: (id) => true|false
    */
    const [listaProductosCarrito, setListaProductosCarrito] = useState([]);

   const addItem = (objeto, cantidad) => {
    const nuevoProducto = {...objeto, cantidad}
    const nuevaListaProductos = [...listaProductosCarrito, nuevoProducto]
    setListaProductosCarrito(nuevaListaProductos)
   }
   const removeItem = (itemId) => {
    listaProductosCarrito = listaProductosCarrito.filter( elemento => elemento.id !== itemId)
   }
   const clear = () => {
    listaProductosCarrito = []
   }
   
   

   console.log(listaProductosCarrito)

    return(
        <CartContext.Provider value={{addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}