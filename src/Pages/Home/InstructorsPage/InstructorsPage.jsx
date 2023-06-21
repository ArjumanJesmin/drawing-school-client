
import SectionTitle from '../../../Components/SectionTitle'
import useClass from '../../../Hooks/useClass';

const InstructorsPage = () => {

    const [menu] = useClass()
    const popular = menu.filter(item => item.availableSeats === "20")
    return (
        <>
            <SectionTitle heading="Popular Instructors" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:my-10 bg-slate-50 shadow-lg border md:p-8 p-4">
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

export default InstructorsPage;