// pages/api/create-order.js

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { amount } = req.body;

    try {
      const { data } = await axios.post(
        'https://api.sandbox.paypal.com/v2/checkout/orders',
        {
          intent: 'CAPTURE',
          purchase_units: [{ amount: { currency_code: 'USD', value: amount } }],
        }
      );

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'PayPal order creation failed' });
    }
  } else {
    res.status(405).end();
  }
}
