import { logoUrl } from "../utils/constant"
import { useState } from "react"


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
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
                <button onClick={()=>login==='Login'?setLogin('Logout'):setLogin('Login')} className="login">{login}</button>
            </ul>
        </div>
    </div>
    )
   
}
export default Header