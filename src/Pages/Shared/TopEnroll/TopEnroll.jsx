/* eslint-disable react/prop-types */

const TopEnroll = ({item}) => {
    const {name,image, price,rating} = item
    return (
        <div style={{borderRadius:'0 50px 0 50px'}} className="flex space-x-4 border p-4 border-yellow-400 shadow-md m-2">
            <img style={{borderRadius:'0 50px 0 50px'}} className="w-64 rounded-xl" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}</h3>
                <p>{rating}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default TopEnroll;