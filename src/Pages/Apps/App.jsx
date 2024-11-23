import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvide } from '../../Context/contextGlobal.jsx'
import Home from '../Home/home.jsx'
import MyAccount from '../My-Account/myAccount.jsx'
import MyOrder from '../MyOrder/myOrder.jsx'
import MyOrders from '../MyOrders/myOrders.jsx'
import NotFound from '../NotFound/notFound.jsx'
import SignIn from '../SignIn/signIn.jsx'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu/checkoutSideMenu.jsx'
import '../Apps/App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home/> },
    { path: '/my-account', element: <MyAccount/> },
    { path: '/my-order', element: <MyOrder/> },
    { path: '/my-orders', element: <MyOrders/> },
    { path: '/my-orders/last', element: <MyOrder/> },
    { path: '/my-orders/:id', element: <MyOrder/> },
    { path: '/sign-in', element: <SignIn/> },
    { path: '/*', element: <NotFound/> }
  ])
  return routes
}

function App() {
  return (    
    <ShoppingCartProvide>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvide>
  )
}

export default App
