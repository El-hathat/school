'use client'
import React, { useEffect, useRef } from 'react';

const PayPalButton = ({ amount, onSuccess }) => {
  const paypalRef = useRef();

  useEffect(() => {
    const loadPayPalScript = async () => {
      if (!window.paypal) {
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=ARtZKQ80qiO9E68FSGEPR5mLp6u8lju-TiGrr3ykoBlaaDrQNfrxzhq3JR8D_vta6zBnHDlP550RKE2d&currency=USD`;
        script.onload = () => createPayPalButton();
        document.body.appendChild(script);
      } else {
        createPayPalButton();
      }
    };

    const createPayPalButton = () => {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          onSuccess(order);
        },
        onError: (err) => {
          console.error('PayPal Checkout onError', err);
        },
      }).render(paypalRef.current);
    };

    loadPayPalScript();
  }, [amount, onSuccess]);

  return <div ref={paypalRef} />;
};

export default PayPalButton;
