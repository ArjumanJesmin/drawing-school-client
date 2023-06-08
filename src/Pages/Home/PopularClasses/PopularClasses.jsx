import TopEnroll from "../../Shared/TopEnroll/TopEnroll";
import SectionTitle from "../../../Components/SectionTitle";
import useClass from "../../../Hooks/useClass";

const PopularClasses = () => {

    const [menu] = useClass()
    const popular = menu.filter(item => item.category === 'Drawing')


    return (
        <>
            <SectionTitle heading="Popular Classes" />
            <div className="grid grid-cols-1 md:grid-cols-3  my-8 gap-4">
                {
                    popular.map(item => <TopEnroll item={item} key={item.name} />)
                }
            </div>
        </>
    );
};

export default PopularClasses;