// ContactUs.jsx
import Lottie from "lottie-react-web";
import contact from "../../../../public/contact.json";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const [axiosSecure] = useAxiosSecure();

  const onSubmit = async (data) => {
    try {
      // Make a POST request to the server endpoint
      const response = await axiosSecure.post("/send-email", data);
      console.log(response.data.message);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <SectionTitle heading="Contact" subHeading="Us" />
      <div className="grid lg:grid-cols-2">
        <div>
          <Lottie
            options={{
              animationData: contact,
              loop: true,
              autoplay: true,
            }}
            width={450}
            height={350}
          />
        </div>
        <div className="my-4 bg-cyan-100 rounded-lg border p-6 shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className={`input input-bordered w-full ${errors.email ? "border-red-500" : ""}`}
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-500">Email is required</span>}
            </div>
            <div>
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                className={`input input-bordered w-full ${errors.subject ? "border-red-500" : ""}`}
                {...register("subject", { required: true })}
              />
              {errors.subject && <span className="text-red-500">Subject is required</span>}
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                className="input input-bordered w-full"
                name="message"
                cols="30"
                rows="5"
                {...register("message")}
              ></textarea>
            </div>
            <input className="btn btn-outline w-full my-3" type="submit" value="Send Message" />
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
