import { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import ShimmerUi from "./ShimmerUi"



const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const[searchText,setSearchText]=useState('')
    // search-filter
    const[filteredRestaurant,setfilteredRestaurant]=useState([])

    useEffect(() => {
        fetchList()
    }, [])
    
    const fetchList = async () => {
        // actual zwigggy api
        const zwiggyData = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await zwiggyData.json()
        const restaurants = json?.data?.cards
            ?.find(card => card.card?.card?.gridElements?.infoWithStyle?.restaurants)
            ?.card?.card?.gridElements?.infoWithStyle?.restaurants
        const data = restaurants.map(res => res.info)
        // console.log(restaurants)
        setListOfRestaurants(data)
        setfilteredRestaurant(data)
    }


    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" value={searchText} className="search-box" onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button onClick={()=>{
                        let filterSearch=listOfRestaurants.filter(res=>res.name.toLowerCase().includes(searchText.toLowerCase()))
                        setfilteredRestaurant(filterSearch)
                    }} className="search-box-btn">Search</button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        let filteredList = listOfRestaurants.filter((res) => res.avgRating > 4.5);
                        setListOfRestaurants(filteredList)
                    }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">

                {listOfRestaurants.length === 0 ? <ShimmerUi /> :
                    filteredRestaurant.map((restaurant) => (
                        <RestaurantCard key={restaurant.id} res={restaurant} />
                    ))
                }

            </div>
        </div>
    )
}

export default Body