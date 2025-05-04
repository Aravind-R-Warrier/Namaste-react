import { useEffect, useState } from "react"
import RestaurantCard, { promotedRestaurantCard } from "./RestaurantCard"
import ShimmerUi from "./ShimmerUi"
import { Link } from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus"



const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [searchText, setSearchText] = useState('')
    // search-filter
    const [filteredRestaurant, setfilteredRestaurant] = useState([])

    useEffect(() => {
        fetchList()
    }, [])

    // HOC
    const WithPromotedLabel = promotedRestaurantCard(RestaurantCard)

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
    console.log(filteredRestaurant[2])

    if (!useOnlineStatus) return (<h1>you are offline check internet!!</h1>)

    return (
        <div className="body">
            <div className=" m-4 p-4">
                <div className="">
                    <input type="text" value={searchText} className="rounded-2xl p-1 border-solid border-4 border-black w-2xl" onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button onClick={() => {
                        let filterSearch = listOfRestaurants.filter(res => res.name.toLowerCase().includes(searchText.toLowerCase()))
                        setfilteredRestaurant(filterSearch)
                    }} className="rounded-lg bg-blue-300 ml-3 px-3 py-1 text-lg font-semibold cursor-pointer">Search</button>
                    <button
                        className="rounded-lg bg-green-200 my-3 px-3 py-1 text-lg font-semibold cursor-pointer mx-2"
                        onClick={() => {
                            let filteredList = listOfRestaurants.filter((res) => res.avgRating > 4.5);
                            setfilteredRestaurant(filteredList)
                        }}>
                        Top Rated Restaurant
                    </button>
                </div>

            </div>
            <div className="res-container flex flex-wrap justify-center">

                {listOfRestaurants.length === 0 ? <ShimmerUi /> :
                    filteredRestaurant.map((restaurant) => (
                        <Link style={{ textDecoration: 'none', color: 'black' }} key={restaurant.id} to={`/restuarant/${restaurant.id}`}>
                            {
                                restaurant?.isOpen ? <WithPromotedLabel res={restaurant} /> : <RestaurantCard res={restaurant} />

                            }
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body