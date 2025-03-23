import { conUrl } from "../utils/constant"

const RestaurantCard = (props) => {
    const { res } = props
    const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } = res
    return (
        <div className="res-card">
            <img className="card-image" src={conUrl + cloudinaryImageId} />
            <h3 style={{ textAlign: 'center', margin: '2px' }}>{name}</h3>
            <h5 style={{ padding: '0px', margin: '0px', textAlign: 'center' }}>{cuisines+' ,'}</h5>
            <div style={{ display: 'flex', justifyContent: 'center',alignItems:'center',flexDirection:'column' }} className="info">
                <h4>{avgRating}</h4>
                <h4>{costForTwo + ' For two'}</h4>
                <h4><span className="delivery">deliveryTime</span>: {res.sla.deliveryTime}min</h4>
            </div>

        </div>
    )
}

export default RestaurantCard