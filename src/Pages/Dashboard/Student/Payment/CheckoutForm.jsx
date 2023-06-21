/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useEffect } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import UseAuth from "../../../../Hooks/UseAuth";

const CheckoutForm = ({ cart, price }) => {

    const stripe = useStripe();
    const elements = useElements();
    const { user } = UseAuth();
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    // eslint-disable-next-line no-unused-vars
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')

    
    useEffect(() => {
        if(price==0) return
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                // console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
            })
    }, [price])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('error', error);
            setCardError(error.message)
        }
        else {
            setCardError('');
            // console.log('Payment Method', paymentMethod);
        }
        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {

                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError);
        }
        console.log('paymentIntent', paymentIntent);
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)

            // save payment information
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuItemId),
                status: 'service pending',
                itemNames: cart.map(item => item.name)
            }
            axiosSecure.post('/payments',payment)
            .then(res =>{
                console.log(res.data);
                if (res.data.insertResult.insertedId){
                    //display confirm use sweet 
                    alert('confirm successfully')
                }
            })
        }
    };



    return (
        <>
            <form className=" m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-outline btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-600 ml-7'>{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;