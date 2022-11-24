// CAMPTURADOR DE ORDER
const axios = require('axios')
const createHttpError = require('http-errors');
const { Transaction, Product } = require('../../database/models');
module.exports = {
    orderCapture: async (req, res, next) => {

        try {
            const { token, description, userId, productsId } = req.query
            
            const response = await axios.post(`${process.env.PAYPAL_API}/v2/checkout/orders/${token}/capture`, {}, {
                auth: {
                    username: process.env.PAYPAL_API_CLIENT,
                    password: process.env.PAYPAL_SECRET
                }
            })

            const detailTrans = {
                userId,
                description: description,
                value: parseFloat(response.data.purchase_units[0].payments.captures[0].amount.value),
                status: 'Completed'
            }

            const products_ID = productsId.split(',')

            console.log('ACA ESTA', products_ID)

            //const product = await Product.findOne({ where: { name: description } })

            const createTransaction = await Transaction.create(detailTrans)

            products_ID.map( (e)=>  createTransaction.addProducts(parseInt(e)))
            
            setTimeout(async ()=> {
                const getTrasnsaction =  await Transaction.findAll({
                    include: {
                        model: Product
                    }
                })
                res.json(getTrasnsaction)
            }, 200)


            

        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error post order] - [order - POST]: ${error.message}`,
            )
            next(httpError)
        }


    }
}