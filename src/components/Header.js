import { logoUrl } from "../utils/constant"
const Header = () => (
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
            </ul>
        </div>
    </div>
)
export default Header