// CAMPTURADOR DE ORDER
const axios = require('axios');
const e = require('express');
const createHttpError = require('http-errors');
const { Transaction, User, Product } = require('../../database/models');
module.exports = {
    orderCapture: async (req, res, next) => {

        try {
            let { token, description, userId, productsId, stock, sold,totalCart } = req.query
            

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

            const value = detailTrans.value
            const {email, fullName} = await User.findByPk(userId)

            const products_ID = productsId.split(',')

            console.log(detailTrans)

            const createTransaction = await Transaction.create(detailTrans)
            if (totalCart != 'undefined') {
                
                totalCart = JSON.parse(totalCart)
                for (const key in totalCart) {
                    let temp = await Product.findByPk(key)
                    temp.update({stock:(temp.dataValues.stock-totalCart[key][1]),sold:(temp.dataValues.sold+totalCart[key][1])})
                }
            }else{
                let temp = await Product.findByPk(productsId)
                temp.update({stock:(temp.dataValues.stock-1),sold:(temp.dataValues.sold+1)})
            }

            products_ID.map( (e)=>  createTransaction.addProducts(parseInt(e)))
            
            axios.post(`${process.env.BACK_URL}/email`,{email, fullName, description, value,createTransaction})

            return res.redirect(`${process.env.FRONT_URL}`)

        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error post order] - [orderCapture - POST]: ${error.message}`,
            )
            next(httpError)
        }

    }
}