/* eslint-disable react/no-unescaped-entities */

import moment from 'moment/moment';
import SectionTitle from '../../../Components/SectionTitle';
import one from '../../../assets/teacher/t1.jpg'
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle heading="Child Draw A Earth" ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={one} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>{moment().format("MMM Do YY")}</p>
                    <p className="uppercase">Certainly! Here's a suggestion for a school heading:</p>
                    <p>I apologize for any confusion. As mentioned earlier, I'm unable to create visual content directly. However, I can suggest a heading for a school based on your requirements. Please provide me with more information about the school, such as its name, motto, or any specific elements you would like to include in the heading, and I'll be happy to assist you in creating a suitable heading.</p>
                    <button className="btn btn-outline border-0 mt-4">Details Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;