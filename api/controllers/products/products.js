const createHttpError = require('http-errors');
const { Product, Category } = require('../../database/models');
const { endpointResponse } = require('../../helpers/success');
const { ErrorObject } = require('../../helpers/error');

module.exports = {
    getProducts: async(req, res, next) => {
        const { productId, categoryId, price } = req.query;
        try {
            const response =  await Product.findByPk(productId);  
            if (response) {
                endpointResponse({
                    res,
                    code: 200,
                    message: 'Test retrieved successfully',
                    body: response,
                  })
            } else {
                throw new ErrorObject("The product does not exist", 404)
            }       
            const resCategory = await Category.findByPk(categoryId);  
            if (resCategory) {
                endpointResponse({
                    res,
                    code: 200,
                    message: 'Test retrieved successfully',
                    body: resCategory,
                  })
            } else {
                throw new ErrorObject("The category does not exist", 404)
            }
            const prices = await Product.findAll();
            const productPrice = prices.filter(data => data.price === price)
            if (productPrice) {
                endpointResponse({
                    res,
                    code: 200,
                    message: 'Test retrieved successfully',
                    body: productPrice,
                  });
            } else {
                throw new ErrorObject("The price does not exist", 404)
            }         
        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error retrieving product] - [product - GET]: ${error.message}`,
              )
              next(httpError)          
        }
    },
};


