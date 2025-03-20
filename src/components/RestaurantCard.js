import { conUrl } from "../utils/constant"

const RestaurantCard = (props) => {
    const { res } = props
    const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, deliveryTime } = res?.data
    return (
        <div className="res-card">
            <img className="card-image" src={conUrl + res.data.cloudinaryImageId} />
            <h3 style={{ textAlign: 'center', margin: '2px' }}>{name}</h3>
            <h5 style={{ padding: '0px', margin: '0px', textAlign: 'center' }}>{cuisines.join(' , ').slice(0, 48)}</h5>
            <div style={{ display: 'flex', justifyContent: 'space-between' }} className="info">
                <h4>{avgRating}</h4>
                <h4>{costForTwo / 100 + ' For two'}</h4>
                <h4>{deliveryTime}min</h4>
            </div>

        </div>
    )
}

export default RestaurantCard