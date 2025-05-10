import ShimmerUi from "./ShimmerUi";
import { conUrl } from "../utils/constant";//image
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatagories from "./Restaurantcatagories";

function RestaurantMenu() {
    const { resId } = useParams()
    //for-custom menu
    const resInfo = useRestaurantMenu(resId)





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

    const catagories=resInfo?.data?.cards[5].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return (
        <div className="text-center ">
            <h1 className=" mb-6 font-bold text-2xl">{name}</h1>
            <p className=" font-bold">{cuisines?.join(", ")}</p>
            <p className=" text-red-500 text-center font-bold">💰 buy two for ₹{costForTwo.slice(0, 3)}</p>
            {/* catagories accordian */}

            {
            catagories.map(catagories=><RestaurantCatagories catagories={catagories}/>)
            }

        </div>

    );
}

export default RestaurantMenu;


//  <ul className="menu-list flex flex-col justify-center items-center text-justify">
//                     {menuItems.length > 0 ? (
//                         menuItems.map((item) => (
//                             <li className="menu-item" key={item?.id}>
//                                 <span className="menu-item-name text-gray-700 mr-1.5">{item?.name}</span>
//                                 <span className="menu-item-price text-green-400">₹{(item?.price || item?.defaultPrice) / 100}</span>
//                             </li>
//                         ))
//                     ) : (
//                         <p className="no-items">No menu items available.</p>
//                     )}
//                 </ul>