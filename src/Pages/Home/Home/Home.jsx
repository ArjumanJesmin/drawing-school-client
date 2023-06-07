import Banner from "../Banner/Banner";
import InstructorsPage from "../InstructorsPage/InstructorsPage";
import PopularClasses from "../PopularClasses/PopularClasses";


const Home = () => {
    return (
        <div>
            <Banner />
            <PopularClasses />
            <InstructorsPage />
        </div>
    );
};

export default Home;