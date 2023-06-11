/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import SectionTitle from "../../Components/SectionTitle";

import useClass from "../../Hooks/useClass";
import AllClass from "./AllClass";


const Class = () => {
    const [menu] = useClass();


    

    return (

        <>
            <SectionTitle heading='All Class' />

            {/* ---------------------------------------------------- */}
            <div className="grid sm:grid-cols-1 md:grid-cols-3 my-8  gap-4">

                {menu.map((classData, index) =>
                (<AllClass key={index} index={index} classData={classData} />

                ))}
            </div>

        </>
    );
};

export default Class;