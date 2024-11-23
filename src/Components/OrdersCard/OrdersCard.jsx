import { ChevronRightIcon } from "@heroicons/react/24/solid"

const OrdersCard = props => {
    const { totalProducts, totalPrice } = props

    console.log('Products: ', totalProducts)

    return (
        <div className='flex justify-between items-center mb-3 border border-black p-4 w-80 rounded-lg'>
            <div className='text-lg font-medium flex justify-between w-full'>
                <p className="flex flex-col">
                    <span className="font-normal">10/10/2024</span>
                    <span className="font-normal">Articulos: {totalProducts}</span>
                </p>
                <p className="flex gap-2 items-center">
                    <span className="font-medium text-lg">${totalPrice}</span>
                    <ChevronRightIcon className="w-6 h-6 text-black cursor-pointer"/>
                </p>
                
            </div>
        </div>
    )
}

export default OrdersCard