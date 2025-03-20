import { useState } from "react"
import RestaurantCard from "./RestaurantCard"
import { resList } from "../utils/mockData"



const Body = () => {
    
    let [listOfRestaurants,setListOfRestaurants]=useState(resList)

// let listOfRestaurants=[
//     {
//         type: 'restaurant',
//         data: {
//             id: '121603',
//             name: 'Kannur Food Point',
//             cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
//             cuisines: ['Kerala', 'Chinese'],
//             costForTwo: 30000,
//             avgRating: '4.9',
//             deliveryTime: 24,
            
//         }
//     },
//     {
//         type: 'restaurant',
//         data: {
//             id: '121613',
//             name: 'KFC',
//             avgRating: '3.9',
//             cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
//             cuisines: ['Kerala', 'Chinese'],
//             costForTwo: 30000,
//             deliveryTime: 24,
            
//         }
//     },
//     {
//         type: 'restaurant',
//         data: {
//             id: '121413',
//             name: 'MCD',
//             avgRating: '4.2',
//             cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
//             cuisines: ['Kerala', 'Chinese'],
//             costForTwo: 30000,
//             deliveryTime: 24,
            
//         }
//     }
// ]
    return (
        <div className="body">
            <div className="filter">
                <button 
                className="filter-btn"
               onClick={()=>{
                 let filteredList=listOfRestaurants.filter((res)=>res.data.avgRating>4);
                setListOfRestaurants(filteredList)
               }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">

                {
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.data.id} res={restaurant}/>
                    ))
                }

            </div>
        </div>
    )
}

export default Body