import { conUrl } from "../utils/constant";

const RestaurantCard = ({ res }) => {
    const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } = res;

    return (
        <div className="m-4 p-6 w-[230px] overflow-hidden justify-center items-center shadow-2xl h-[440px]">
            <img className="card-image w-full h-50 object-cover rounded" src={conUrl + cloudinaryImageId} alt={name} />
            <h3 className="text-black-500 font-bold text-lg text-center">{name}</h3>
            <h5 className="text-center">{cuisines.join(', ')}</h5>
            <div className="flex flex-col justify-center items-center info">
                <h4>{avgRating}</h4>
                <h4>{costForTwo} For two</h4>
                <h4><span className="delivery">Delivery Time</span>: {sla?.deliveryTime} min</h4>
            </div>
        </div>
    );
};

export const promotedRestaurantCard = (RestaurantCard) => {
    return (props) => (
        <div className="relative">
            <div className="absolute top-3 left-4 bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded shadow-md z-10">
            ⚡  PROMOTED
            </div>
            <RestaurantCard {...props} />
        </div>
    );
};


export default RestaurantCard;
