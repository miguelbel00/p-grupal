const createHttpError = require('http-errors');
const { Product, Category, Review, Transaction } = require('../../database/models');
const { endpointResponse } = require('../../helpers/success');
const { ErrorObject } = require('../../helpers/error');
const { where } = require('sequelize');

module.exports = {
    productEdit: async(req, res, next) => {
        
        const {productId} = req.params
        const {price,description,image,stock,name} = req.body

        try{            
                const product = await Product.findOne({
                    where: {id:productId}
                })
                const response = await product.update({
                    price:price,
                    description:description,
                    image:image,
                    stock: stock,
                    name:name
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
               `[Error get all products] - [getAllProducts - GET]: ${error.message}`,
           )
           next(httpError)
       }
    }

}