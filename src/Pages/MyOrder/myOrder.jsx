import { useContext } from "react"
import Layout from "../../Components/Layout/Layout.jsx"
import { ShoppingCartContext } from "../../Context/contextGlobal.jsx"
import OrderCard from "../../Components/OrderCard/orderCard.jsx"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)  
  console.log('Path: ', index )

  if (index === 'last') {
    index = context.order?.length - 1
    console.log('new index: ', context.order?.length - 1)
  } 

    const renderOrder = () => {
      if(context.order?.[index]?.products !== undefined){
        return(
            <div className='flex flex-col w-80 mt-6'>
            {
              context.order?.[index]?.products.map(product => (
              <div>
                  <div>
                      <OrderCard 
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      imageurl={product.images}
                      price={product.price}
                  />
                  </div>
              </div>

              ))
            }
          </div>
        )
      } else {
        return (
          <p className="mt-8 font-medium">No hay productos que mostrar por el momento!!</p>
        )       
      }
    }

      return (    
      <Layout>
        <div className="flex w-80 items-center relative justify-center">
          <Link to='/my-orders' className="absolute left-0">
            <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer"/>  
          </Link>
          <h1 className="font-semibold text-xl">Mi Orden</h1>
        </div>
        {renderOrder()}
      </Layout>
    )
  }
  
  export default MyOrder
  