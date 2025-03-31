import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { conUrl } from "../utils/constant";

function RestaurantMenu() {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []); 

    const fetchMenu = async () => {
        try {
            const response = await fetch(
                "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=5934&submitAction=ENTER"
            );
            const resData = await response.json();
            setResInfo(resData); 
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };

    if (!resInfo) return <ShimmerUi />; 

    const restaurantInfo = resInfo?.data?.cards?.find(
        (card) => card?.card?.card?.info
    )?.card?.card?.info;

    const {name,cuisines,costForTwo,cloudinaryImageId} = restaurantInfo || "Restaurant"; 

    // ✅ Extracting menu items safely
    const menuItems =
        resInfo?.data?.cards
            ?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards
            ?.map((card) => card?.card?.card?.itemCards)
            .flat()
            .map((item) => item?.card?.info).slice(0,20) || [];

    return (
        <div className="Menu">
           <div className="resDetails">
           <h1 style={{fontFamily:'cursive',fontWeight:'bold',margin:'6px',color:'black'}}>{name}</h1>
            <img src={conUrl+cloudinaryImageId}/>
            <div style={{display:'flex',justifyContent:'space-between',width:'300px',margin:'5px'}}>
            <h4>{cuisines.join(' ,')}</h4>
            <h4>Price For Two {costForTwo.slice(0,3)}</h4>
            </div>
           </div>
            <ul>
            <h2>Menu</h2>
                {menuItems.length > 0 ? (
                    menuItems.map((item) => (
                        <li style={{fontSize:'14px'}} key={item?.id}>{item?.name}</li>
                    ))
                ) : (
                    <p>No menu items available.</p>
                )}
            </ul>
        </div>
    );
}

export default RestaurantMenu;
