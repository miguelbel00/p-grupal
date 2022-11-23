// CAMPTURADOR DE ORDER
const axios = require('axios')
const { Transaction, Product } = require('../../database/models');
module.exports = {
    orderCapture: async (req, res, next) => {

        try {
            const { token, description } = req.query

            const response = await axios.post(`${process.env.PAYPAL_API}/v2/checkout/orders/${token}/capture`, {}, {
                auth: {
                    username: process.env.PAYPAL_API_CLIENT,
                    password: process.env.PAYPAL_SECRET
                }
            })

            const detailTrans = {
                description: description,
                value: parseFloat(response.data.purchase_units[0].payments.captures[0].amount.value),
                status: 'Completed'
            }

            const product = await Product.findOne({ where: { name: description } })

            const createTransaction = await Transaction.create(detailTrans)

            createTransaction.addProduct(product.id)

            res.json(await Transaction.findAll({
                include: {
                    model: Product
                }
            }))

            //modelo 
            // const dbTransaction = await Category.findAll({
            //     where: {
            //         name: categories
            //     }
            // });
            // createProducts.addCategory(dbCategory);
            // endpointResponse({
            //     res,
            //     code: 201,
            //     message: 'Product created successfully',
            //     body: createProducts,
            // });

        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error post order] - [order - POST]: ${error.message}`,
            )
            next(httpError)
        }


    }
}