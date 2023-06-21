/* eslint-disable no-undef */
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

import SectionTitle from "../../../../Components/SectionTitle";
import useCart from "../../../../Hooks/useCart";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk);

const Payment = () => {
    const [cart ]= useCart()
    const total =cart.reduce((sum, item) => sum + item.price, 0)
    const price = parseFloat(total.toFixed(2))
    


    return (
        <div className="w-full mx-6">
            <SectionTitle heading="Payment" />

            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} cart={cart} />
            </Elements>
        </div>
    );
};

export default Payment;