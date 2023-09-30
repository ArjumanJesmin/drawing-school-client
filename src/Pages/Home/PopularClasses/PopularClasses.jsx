import SectionTitle from "../../../Components/SectionTitle";
import useClass from "../../../Hooks/useClass";

const PopularClasses = () => {

    const [menu] = useClass()
    const popular = menu.filter(item => item.className === 'Drawing')


    return (
        <>
            <SectionTitle heading="Popular " subHeading="Classes" />
            <div className="grid grid-cols-1 md:grid-cols-3  my-8 gap-4">
                {
                    popular.map(item => <>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={item.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{name}</h2>
                                <p>{item.instructor}</p>
                                <p>${item.price}</p>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </>
    );
};

export default PopularClasses;