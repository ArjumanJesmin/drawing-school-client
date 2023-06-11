/* eslint-disable no-undef */
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "./CheckoutForm";

import SectionTitle from "../../../../Components/SectionTitle";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk);

const Payment = () => {

    // const total =reduce((sum, item) => sum + item.price, 0)
    // const price = parseFloat(total.toFixed(2))


    return (
        <div>
            <SectionTitle heading="Payment" />
            <h2 className="text-3xl">This is Payment page</h2>

            <Elements stripe={stripePromise}>
                {/* <CheckoutForm price={price} cart={cart} /> */}
            </Elements>
        </div>
    );
};

export default Payment;