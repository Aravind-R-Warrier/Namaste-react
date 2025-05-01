import ShimmerUi from "./ShimmerUi";
import { conUrl } from "../utils/constant";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

function RestaurantMenu() {
    const {resId}=useParams()
    //for-custom menu
    const resInfo=useRestaurantMenu(resId)

   

    

    if (!resInfo) return <ShimmerUi />;

    const restaurantInfo = resInfo?.data?.cards?.find(
        (card) => card?.card?.card?.info
    )?.card?.card?.info;

    const { name, cuisines, costForTwo, cloudinaryImageId } = restaurantInfo || {};

    const menuItems =
        resInfo?.data?.cards
            ?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards
            ?.map((card) => card?.card?.card?.itemCards)
            .flat()
            .map((item) => item?.card?.info)
            .slice(1, 15) || [];

    return (
        <div className="restaurant-menu">
            <div className="restaurant-header">
                <img className="restaurant-image" src={conUrl + cloudinaryImageId} alt={name} />
                <div className="restaurant-details">
                    <h1 className="restaurant-name">{name}</h1>
                    <p className="restaurant-cuisines">{cuisines?.join(", ")}</p>
                    <p className="restaurant-price">💰 buy two for ₹{costForTwo.slice(0,3)}</p>
                </div>
            </div>

            <div className="menu-container">
                <h2 className="menu-title">🍽 Menu</h2>
                <ul className="menu-list">
                    {menuItems.length > 0 ? (
                        menuItems.map((item) => (
                            <li className="menu-item" key={item?.id}>
                                <span className="menu-item-name">{item?.name}</span>
                                <span className="menu-item-price">₹{(item?.price || item?.defaultPrice) / 100}</span>
                            </li>
                        ))
                    ) : (
                        <p className="no-items">No menu items available.</p>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default RestaurantMenu;
