import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import InstructorsPage from "../InstructorsPage/InstructorsPage";
import PopularClasses from "../PopularClasses/PopularClasses";


const Home = () => {
    return (
        <div>
            <Banner />
            <PopularClasses />
            <InstructorsPage />
            <Featured/>
        </div>
    );
};

export default Home;