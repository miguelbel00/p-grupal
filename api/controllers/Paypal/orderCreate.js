// CREATE ORDER 
const axios = require('axios')
const createHttpError = require('http-errors');



module.exports = {
    orderCreate: async (req, res, next) => {
        const { description, price, userId, productsId, totalCart} = req.body

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
                    return_url: `${process.env.BACK_URL}/checkout/capture-order?description=${encodeURI(description)}&productsId=${encodeURI(productsId)}&userId=${userId}&totalCart=${encodeURI(totalCart)}`,
                    cancel_url: `${process.env.BACK_URL}/checkout/cancel-order`
                },
            };
            
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
                `[Error post order] - [orderCreate - POST]: ${error.message}`,
              )
              next(httpError)    

        }
    }
}