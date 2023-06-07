/* eslint-disable react/prop-types */

const AllClass = ({ item }) => {
    const { name, image, price, rating } = item
    return (
        <div style={{ borderRadius: '0 25px 0 25px' }} className="flex space-x-8 border p-4 shadow-md m-2">
            <img style={{ borderRadius: '0 25px 0 25px' }} className="w-64 rounded-xl" src={image} alt="" />
            <div>
            <div>
                <h3 className="uppercase">{name}</h3>
                <p> Rating: {rating}</p>
            </div>
            <p className="text-yellow-500 pb-4"> price: ${price}</p>
            <div>
                <button className="btn btn-outline btn-warning">Select</button>
            </div>
            </div>
        </div>
    );
};

export default AllClass;