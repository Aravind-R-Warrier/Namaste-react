import { useEffect, useState } from "react"
import { Menu_Url } from "./constant"


const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null )

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch(
                Menu_Url + resId
            );
            const resData = await response.json();
            setResInfo(resData);
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    }

    return resInfo
}

export default useRestaurantMenu;