import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvide = ({children}) => {
    //Contexto/Estado para el contador
    const [count, setCount] = useState(0)                                       

    //Contexto/Estado para el detalle de productos - Abrir/cerrar
    const [isProductDetailOpen, setisProductDetailOpen] = useState(false)       
    const openProductDetail = () => setisProductDetailOpen(true)                
    const closeProductDetail = () => setisProductDetailOpen(false)

    //Contexto/Estado para mostrar productos en el detalle
    const [productToShow, setProductToShow] = useState({})       

    //Contexto/Estado para agregar productos en el carrito de compras
    const [cartProducts, setCartProducts] = useState([])

    //Contexto/Estado para agregar la orden al modulo myOrder para ver su detalle
    const [order, setOrder] = useState([])

    //Contexto/Estado para el detalle de productos - Abrir/cerrar
    const [isCheckoutSideMenuOpen, setisCheckoutSideMenuOpen] = useState(false)       
    const openCheckoutSideMenu = () => setisCheckoutSideMenuOpen(true)                
    const closeCheckoutSideMenu = () => setisCheckoutSideMenuOpen(false)
                 
    //console.log('count: ', count)

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            setisCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}