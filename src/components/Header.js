import { Link } from "react-router"
import { logoUrl } from "../utils/constant"
import { useState } from "react"
import useOnlineStatus from "../utils/useOnlineStatus"


const Header = () => {

    const[login,setLogin]=useState('Login')
   
    return(
        <div className="header">
        <div className="logo-container">
            <img className="logo" src={logoUrl} />
            <p>Food Waala</p>
        </div>
        <div className="nav-items">
            <ul>
                <li>{useOnlineStatus?"online:"+"😊":'offline:'+"😴"}</li>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About Us</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
                <li>Cart</li>
                <button onClick={()=>login==='Login'?setLogin('Logout'):setLogin('Login')} className="login">{login}</button>
            </ul>
        </div>
    </div>
    )
   
}
export default Header
