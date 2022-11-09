const createHttpError = require('http-errors');
const { Product, Category } = require('../../database/models');
const { endpointResponse } = require('../../helpers/success');
const { ErrorObject } = require('../../helpers/error');
const { get } = require('../../routes');

module.exports = {
    postProducts: async (req, res, next) => {
        const {
            name,
            description,
            image,
            price,
            categories} = req.body;
            try {
                const createProducts = await Product.create({
                    name,
                    description,
                    image,
                    price,        
                });

                const dbCategory = await Category.findall({
                    where: {
                        name: categories
                    }
                });

             
                Category.addCategory(dbCategory);
                endpointResponse({
                    res,
                    code: 200,
                    message: 'Test retrieved successfully',
                    body: createProducts,
                  });
                
            } catch (error) {
                    const httpError = createHttpError(
                        error.statusCode,
                        `[Error retrieving products] - [product - POST]: ${error.message}`,
                      )
                      next(httpError)          
                }   
            }
};