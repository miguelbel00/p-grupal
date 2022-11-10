const createHttpError = require('http-errors');
const { Product, Category } = require('../../database/models');
const { endpointResponse } = require('../../helpers/success');
const { ErrorObject } = require('../../helpers/error');


module.exports = {
    getProductsQuery: async (req, res, next) => {
      const { categoryId, price } = req.query;
        try {
            const products = await Product.findAll({
                where: {
                    price: price
                }
            });
            if (products) {
                endpointResponse({
                    res,
                    code: 200,
                    message: 'price found successfully',
                    body: products,
                  });      
            } else {
                const orderPrice = products.sort((a, b) => b - a);
                endpointResponse({
                    res,
                    code: 200,
                    message: 'price created successfully',
                    body: orderPrice,
                  });  
            } 

            if (!price) {
                throw new ErrorObject('price not found', 404)
            }
            

            const category = await Category.finByPk(categoryId);

            if (category) {
                endpointResponse({
                    res,
                    code: 200,
                    message: 'category was found by id',
                    body: category,
                  }); 
            } else {
                throw new ErrorObject('category not found', 404)
            }; 
            
        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error get product query] - [productQuery - POST]: ${error.message}`,
              )
              next(httpError)
        }
       
     }
};
