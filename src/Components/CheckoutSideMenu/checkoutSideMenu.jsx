import { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context/contextGlobal";
import OrderCard from "../OrderCard/orderCard";
import { TotalPrice, totalPriceParam } from "../../Utilities/Utilities";
import './checkoutSideMenu.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const productDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const productCheckout = () => {
        const orderToAdd = {
            date: '09/10/2024',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPriceParam(context.cartProducts)
        } 

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
    }

    return(
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed right-0 border border-black rounded bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Mi Orden</h2>
                <button onClick={() => context.closeCheckoutSideMenu()}>
                    <XMarkIcon className='h-6 w-6 text-black'></XMarkIcon>
                </button>                
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    context.cartProducts.map(productData => (
                    <div className="flex items-center justify-center">
                        <div>
                            <OrderCard 
                            key={productData.id}
                            id={productData.id}
                            title={productData.title}
                            imageurl={productData.images}
                            price={productData.price}
                            productDelete={productDelete}
                        />
                        </div>  
                    </div>

                    ))
                }
            </div>
            <div className="px-6 pb-4 bg-slate-200">
                <p className="flex justify-between items-center">
                    <span className="font-medium text-xl">Total:</span>
                    <span className="font-medium text-2xl">${totalPriceParam(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button className="w-full bg-black py-3 text-white rounded-lg" onClick={() => productCheckout()}>Pagar</button>  
                </Link>                                   
            </div>

        </aside>
    )
}

export default CheckoutSideMenu