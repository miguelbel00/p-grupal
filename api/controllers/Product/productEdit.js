const createHttpError = require('http-errors');
const { Product, Category, Review, Transaction } = require('../../database/models');
const { endpointResponse } = require('../../helpers/success');
const { ErrorObject } = require('../../helpers/error');
const { where } = require('sequelize');

module.exports = {
    productEdit: async(req, res, next) => {
        
        const {price,stock,productId} = req.body

        try{            
                const product = await Product.findOne({
                    where: {id:productId}
                })
                const response = await product.update({
                    price:price,
                    stock: stock,
                })
                endpointResponse({
                    res,
                    code: 200,
                    message: 'Product edit successful',
                    body: response
                })
                
            }
        catch (error) {
           const httpError = createHttpError(
               error.statusCode,
               `[Error Edit products] - [EditProductProducts - GET]: ${error.message}`,
           )
           next(httpError)
       }
    }

}