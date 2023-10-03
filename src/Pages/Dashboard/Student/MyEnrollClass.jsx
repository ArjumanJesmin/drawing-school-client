import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";
import useClass from "../../../Hooks/useClass";


const MyEnrollClass = () => {


  const [menu] = useClass()
  const popular = menu.filter(item => item.className === 'Drawing')

  return (
    <div className="w-10/12 mx-auto">
      <Helmet>
        <title>Akibuki | My Enroll Class</title>
      </Helmet>
      <SectionTitle heading="Enroll" subHeading="Classes" />
      <div className="border shadow-md">
        
          <table className="table">
            <thead>
              <tr className="text-xl py-4 text-blue-800">
                <th>Class Name</th>
                <th>Instructor</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {popular.map((classData, index) => (
                <tr key={index}>
                  <td>{classData?.name}</td>
                  <td>{classData.instructor}</td>
                  <td>${classData.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
       
      </div>
    </div>
  );
};

export default MyEnrollClass;
