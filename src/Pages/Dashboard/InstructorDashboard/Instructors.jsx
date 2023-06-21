import useClass from "../../../Hooks/useClass";

const Instructors = () => {
    const [menu] = useClass()
    
 
    return (
        <div>
            <h1>Instructors</h1>
           <div className="grid md:grid-cols-3">
            {menu.map((instructor) => (
                <div  key={instructor._id}>
                    <img className="w-12 h-8 rounded" src={instructor.image} alt={instructor.instructor} />
                    <h2>{instructor.instructor}</h2>
                </div>
            ))}
            </div>

        </div>
    );
};

export default Instructors;