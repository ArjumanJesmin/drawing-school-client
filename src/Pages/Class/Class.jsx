/* eslint-disable no-undef */
import SectionTitle from "../../Components/SectionTitle";
import useClass from "../../Hooks/useClass";
import AllClass from "./AllClass";

const Class = () => {
    const [menu] = useClass();

    return (

        <>
            <SectionTitle heading='All Class' />
            <div className="grid grid-cols-1 md:grid-cols-2  my-8 gap-4">
                {
                    menu.map(item => <AllClass item={item} key={item.name} />)
                }
            </div>
        </>
    );
};

export default Class;