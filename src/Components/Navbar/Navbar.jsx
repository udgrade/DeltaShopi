import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context/contextGlobal"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"


const Navbar = () => {

    const activeStyle = "underline underline-offset-4"
    const context = useContext(ShoppingCartContext)

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink 
                    to='/'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined 
                    }
                    >
                        DeltaShopi
                    </NavLink>
                </li>
                <li className='text-lg'>
                    <NavLink 
                    to='/all'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined 
                    }>
                        All
                    </NavLink>
                </li>
                <li className='text-lg'>
                    <NavLink 
                    to='/clothes'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined 
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li className='text-lg'>
                    <NavLink 
                    to='/electronics'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined 
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li className='text-lg'>
                    <NavLink 
                    to='/furnitures'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined 
                    }>
                        Furnitures
                    </NavLink>
                </li>
                <li className='text-lg'>
                    <NavLink 
                    to = '/toys'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined 
                    }>
                        Toys
                    </NavLink>
                </li>
                <li className='text-lg'>
                    <NavLink 
                    to = '/others'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined 
                    }>
                        Others
                    </NavLink>
                </li>
            </ul >
            <ul className='flex items-center gap-3'>
                <li className='text-lg text-black/60'>
                    <NavLink 
                    to='/my-account'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined 
                    }>
                        sebastiantuquerres@gmail.com
                    </NavLink>
                </li>
                <li className='text-lg'>
                    <NavLink 
                    to='/my-account'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined 
                    }>
                        MyAccount
                    </NavLink>
                </li>
                <li className='text-lg'>
                    <NavLink 
                    to='/my-orders'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined 
                    }>
                        MyOrders
                    </NavLink>
                </li>
                <li className='text-lg'>
                    <NavLink 
                    to='/sign-in'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined 
                    }>
                        SignIn
                    </NavLink>
                </li>
                <li className='text-lg'>
                    <NavLink className='flex'>                       
                        <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
                        <div>
                            {context.count}
                        </div>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
} 

export default Navbar