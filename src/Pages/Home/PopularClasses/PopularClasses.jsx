import { useEffect, useState } from "react";
import TopEnroll from "../../Shared/TopEnroll/TopEnroll";

const PopularClasses = () => {
    const [draw, setDraw] = useState([])

    useEffect(() => {
        fetch('classes.json')
        .then(res =>res.json())
        .then(data => {
           const  popularItems = data.filter(item => item.category === 'Drawing')
            setDraw(popularItems)
        })
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2  my-8 gap-4">
            {
                draw.map(item => <TopEnroll item={item} key={item.name}/>  )
            }
        </div>
    );
};

export default PopularClasses;