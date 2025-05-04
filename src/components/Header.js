import { Link } from "react-router"
import { logoUrl } from "../utils/constant"
import { useState } from "react"
import useOnlineStatus from "../utils/useOnlineStatus"


const Header = () => {

    const[login,setLogin]=useState('Login')
   
    return(
        <div className="flex justify-between shadow-lg mb-4">
        <div className="logo-container">
            <img className="w-20 ml-1.5" src={logoUrl} />
            <p className="font-serif text-amber-500 text-xl font-medium ml-1.5">Food Waala</p>
        </div>
        <div className="nav-items flex items-center">
            <ul className="flex p-4 m-4 ">
                <li className="px-4 text-lg bg-amber-100 rounded-2xl m-2 hover:bg-amber-200">{useOnlineStatus?"online:"+"😊":'offline:'+"😴"}</li>
                <li className="px-4 text-lg bg-amber-100 rounded-2xl m-2 hover:bg-amber-200"><Link to={'/'}>Home</Link></li>
                <li className="px-4 text-lg bg-amber-100 rounded-2xl m-2 hover:bg-amber-200"><Link to={'/about'}>About Us</Link></li>
                <li className="px-4 text-lg bg-amber-100 rounded-2xl m-2 hover:bg-amber-200"><Link to={'/contact'}>Contact</Link></li>
                <li className="px-4 text-lg bg-amber-100 rounded-2xl m-2 hover:bg-amber-200">Cart</li>
                <button onClick={()=>login==='Login'?setLogin('Logout'):setLogin('Login')} className="px-4 text-lg bg-amber-100 rounded-2xl m-2 hover:bg-amber-200">{login}</button>
            </ul>
        </div>
    </div>
    )
   
}
export default Header
