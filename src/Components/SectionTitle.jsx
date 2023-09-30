/* eslint-disable react/prop-types */
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8 font-semibold">
            <h3 className="text-3xl uppercase text-yellow-500 border-y-2 py-4">
                {heading}
                <span className="text-[#00425A]"> {subHeading} </span>
            </h3>
        </div>
    );
};

export default SectionTitle;