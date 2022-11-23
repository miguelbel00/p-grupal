// CREATE ORDER 
const axios = require('axios')
const createHttpError = require('http-errors');
const { endpointResponse } = require('../../helpers/success');
const { ErrorObject } = require('../../helpers/error');


module.exports = {
    orderCreate: async (req, res, next) => {
        const { description, price } = req.body
        try {
            //modelo ejemplo 
            const order = {
                intent: 'CAPTURE',
                purchase_units:[
                    {
                        amount: {
                            currency_code: 'USD',
                            value: price,
                        },
                        
                    }
                ],
                application_context: {
                    brand_name: 'astro gamer',
                    landing_page: 'LOGIN',
                    user_action: 'PAY_NOW',
                    return_url: `http://localhost:3005/checkout/capture-order?description=${encodeURI(description)}`,
                    cancel_url: 'http://localhost:3005/checkout/cancel-order'
                },
            };
            console.log(description)
            const response = await axios.post(`${process.env.PAYPAL_API}/v2/checkout/orders`, order, {
                auth: {
                    username: process.env.PAYPAL_API_CLIENT,
                    password: process.env.PAYPAL_SECRET
                }
            })
 

            res.json(response.data)

        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error post order] - [order - POST]: ${error.message}`,
              )
              next(httpError)    

        }
    }
}