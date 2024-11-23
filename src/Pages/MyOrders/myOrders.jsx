import Layout from "../../Components/Layout/Layout.jsx"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context/contextGlobal.jsx"
import { Link } from "react-router-dom"
import OrdersCard from "../../Components/OrdersCard/OrdersCard.jsx"

function MyOrders() {
  const context = useContext(ShoppingCartContext)
  console.log('order: ',context.order)
    return (    
      <Layout>
        <div className="flex w-80 items-center relative justify-center mb-4">
          <h1 className="font-semibold text-lg">Mis Ordenes</h1>
        </div>
      {
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))
      }     
      </Layout>
    )
  }
  
  export default MyOrders
  