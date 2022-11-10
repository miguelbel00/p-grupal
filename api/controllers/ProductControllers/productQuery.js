const createHttpError = require('http-errors');
const { Product, Category } = require('../../database/models');
const { endpointResponse } = require('../../helpers/success');
const { ErrorObject } = require('../../helpers/error');


module.exports = {
    getProductsQuery: async (req, res, next) => {
      const { productName, categoryId, price } = req.query;
        try {

            const productsByName = await Product.findAll({
                where: {
                    name: productName
                }
            })
            if (productsByName) {
                endpointResponse({
                    res,
                    code: 200,
                    message: 'product was found by name',
                    body: productsByName,
                  });  
            } else {
                throw new ErrorObject('product not found', 404)
            }
            const productsByPrice = await Product.findAll({
                where: {
                    price: price
                }
            });
            if (productsByPrice) {
                endpointResponse({
                    res,
                    code: 200,
                    message: 'product was found by price',
                    body: productsByPrice,
                  });      
            } else {
                const orderPrice = productsByPrice.sort((a, b) => b - a);
                endpointResponse({
                    res,
                    code: 200,
                    message: 'all product',
                    body: orderPrice,
                  });  
            } 

            if (!productsByPrice) {
                throw new ErrorObject('price not found', 404)
            }
            

            const category = await Category.finByPk(categoryId);

            if (category) {
                endpointResponse({
                    res,
                    code: 200,
                    message: 'the product was found by the category id',
                    body: category,
                  }); 
            } else {
                throw new ErrorObject('category not found', 404)
            }; 
            
        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error get product query] - [productQuery - GET]: ${error.message}`,
              )
              next(httpError)
        }
       
     }
};
