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

    const { name, cuisines, costForTwo, cloudinaryImageId} = restaurantInfo || {};


    const menuItems =
        resInfo?.data?.cards
            ?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards
            ?.map((card) => card?.card?.card?.itemCards)
            .flat()
            .map((item) => item?.card?.info)
            .slice(1, 15) || [];

    return (
        <div className="restaurant-menu w-[100%] flex h-[100vh] justify-center ">
            <div className="restaurant-header flex flex-col p-4 my-10 items-center text-justify shadow-2xl h-[90%]">
                <img className="restaurant-image h-60 w-[300px] shadow-2xl rounded-xl" src={conUrl + cloudinaryImageId} alt={name} />
                <div className="restaurant-details text-center">
                    <h1 className="restaurant-name ">{name}</h1>
                    <p className="restaurant-cuisines">{cuisines?.join(", ")}</p>
                    <p className=" text-red-500">💰 buy two for ₹{costForTwo.slice(0,3)}</p>
                </div>
                <div className="menu-container flex flex-col justify-center items-center text-justify">
                <h2 className="menu-title">🍽 Menu</h2>
                <ul className="menu-list flex flex-col justify-center items-center text-justify">
                    {menuItems.length > 0 ? (
                        menuItems.map((item) => (
                            <li className="menu-item" key={item?.id}>
                                <span className="menu-item-name text-gray-700 mr-1.5">{item?.name}</span>
                                <span className="menu-item-price text-green-400">₹{(item?.price || item?.defaultPrice) / 100}</span>
                            </li>
                        ))
                    ) : (
                        <p className="no-items">No menu items available.</p>
                    )}
                </ul>
            </div>
            </div>

           
        </div>
    );
}

export default RestaurantMenu;
