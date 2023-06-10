/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import SectionTitle from "../../Components/SectionTitle";
import useAdmin from "../../Hooks/useAdmin";
import useClass from "../../Hooks/useClass";
import useInstructor from "../../Hooks/useInstructor";
// import AllClass from "./AllClass";

const Class = () => {
    const [menu] = useClass();
    const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

    return (

        <>
            <SectionTitle heading='All Class' />
         {/*    <div className="grid grid-cols-1 md:grid-cols-3 my-8  gap-4">
                {
                    menu.map(item => <AllClass item={item} key={item.name} />)
                }
            </div> */}

            {/* ---------------------------------------------------- */}
            <div  className="grid sm:grid-cols-1 md:grid-cols-3 my-8  gap-4">
               
                {menu.map((classData, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: classData.availableSeats === 0 ? 'red' : 'white',
                            padding: '10px',
                            marginBottom: '10px',
                        }}
                    >
                        <div className="card w-96 bg-base-100 shadow-xl">
                        <img src={classData.image} alt="Class" />
                        <div className="card-body">
                        <h2>{classData.name}</h2>
                        <p>Instructor: {classData.instructor}</p>
                        <p>Available Seats: {classData.availableSeats}</p>
                        <p className="text-yellow-500 pb-4">Price: ${classData.price}</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-outline "
                            disabled={
                                classData.availableSeats === 0 ||
                                !classData.isLoggedIn ||
                                classData.isAdmin
                            }
                        >
                            {classData.isLoggedIn ? 'Select' : ' Select'}
                        </button>
                        </div>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
            
        </>
    );
};

export default Class;