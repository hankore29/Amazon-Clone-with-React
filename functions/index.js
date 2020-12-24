const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe') (
    'sk_test_51I1VL0HYdTfm1l8WzhnXr3UdxgzbfIBfCQzwXHqb4J4rDZ9cIg2Kj0wf7F76D3dy4MiLJKORC9aAZyFhEpRqycOP00OTtSjT4v'
);


const app = express();

//middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Recieved for this amount >>> ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd',
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);


//http://localhost:5001/clone-e109b/us-central1/api