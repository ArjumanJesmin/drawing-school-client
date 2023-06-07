import { useEffect, useState } from "react";
import TopEnroll from "../../Shared/TopEnroll/TopEnroll";
import SectionTitle from "../../../Components/SectionTitle";

const PopularClasses = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('classes.json')
        .then(res =>res.json())
        .then(data => {
           const  popularItems = data.filter(item => item.category === 'Drawing')
           setMenu(popularItems)
        })
    }, [])
    return (
        <div>
            <SectionTitle heading="Popular Classes"/>
            <div className="grid grid-cols-1 md:grid-cols-2  my-8 gap-4">
            {
                menu.map(item => <TopEnroll item={item} key={item.name}/>  )
            }
        </div>
        </div>
    );
};

export default PopularClasses;