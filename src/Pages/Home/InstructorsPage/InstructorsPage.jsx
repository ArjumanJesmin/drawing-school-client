
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:my-10 bg-slate-50 shadow-lg border md:p-8 p-4">
            <div >
                <img className='rounded-lg' src={one} alt="" />
                <h2>Linia Jani</h2>
            </div>
            <div>
                <img className='rounded-lg' src={two} alt="" />
                <h2>Hanan al-Hroub</h2>
            </div>
            <div>
                <img className='rounded-lg' src={three} alt="" />
                <h2>Erin Gruwell</h2>
            </div>
            <div>
                <img className='rounded-lg' src={four} alt="" />
                <h2>Anne Sullivan</h2>
            </div>
            <div>
                <img className='rounded-lg' src={five} alt="" />
                <h2>C.S.Lewis</h2>
            </div>
            <div>
                <img className='rounded-lg' src={six} alt="" />
                <h2>Frederick Douglass</h2>
            </div>
        </div>
        </div>
    );
};

export default InstructorsPage;