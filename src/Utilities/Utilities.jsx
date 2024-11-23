import { useEffect, useContext } from "react";
import { ShoppingCartContext } from "../Context/contextGlobal";

//Esta es la forma aunque funcional, no es la correcta ya que no esta optimizada para calcular la suma
export const TotalPrice = () => {
    const context = useContext(ShoppingCartContext)
    let sumTotalProducts = 0

    context.cartProducts.forEach((productData) => {
        sumTotalProducts += productData.price;
    });

    console.log('Suma Total: ', sumTotalProducts)

    return (
        {sumTotalProducts}
    )
}

/** 
 * This Function Calculates a Total Price of a New Order
 * @param {array} products cartProduct: Array of Objects
 * @returns {number} Total Price
*/
//Esta es la forma correcta y optimizada de calcular la suma
export const totalPriceParam = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price)
    return sum
}