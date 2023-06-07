
import SectionTitle from '../../../Components/SectionTitle'
import one from '../../../assets/teacher/t1.jpg'
import two from '../../../assets/teacher/t2.jpg'
import three from '../../../assets/teacher/t3.jpg'
import four from '../../../assets/teacher/t4.jpg'
import five from '../../../assets/teacher/t5.jpg'
import six from '../../../assets/teacher/t6.jpg'
const InstructorsPage = () => {
    return (
        <div>
            <SectionTitle heading="Popular Instructors "/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
            <div>
                <img src={one} alt="" />
            </div>
            <div>
                <img src={two} alt="" />
            </div>
            <div>
                <img src={three} alt="" />
            </div>
            <div>
                <img src={four} alt="" />
            </div>
            <div>
                <img src={five} alt="" />
            </div>
            <div>
                <img src={six} alt="" />
            </div>
        </div>
        </div>
    );
};

export default InstructorsPage;