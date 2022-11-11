const createHttpError = require('http-errors');
const { Product, Category } = require('../../database/models');
const { endpointResponse } = require('../../helpers/success');
const { ErrorObject } = require('../../helpers/error');


module.exports = {
    createProducts: async (req, res, next) => {
        const {
            name,
            description,
            image,
            price,
            stock,
            categories
        } = req.body;

     
            try {
                if (!name || !description || !image || !price || !categories) {
                        throw new ErrorObject('Missing parameters', 404)   
                };

                if (name) {
                  const allproduct = await Product.findAll();
                  const productCheck = allproduct.find(data => data.name === name);

                  if (!productCheck) {       
                  const createProducts = await Product.create({
                    name,
                    description,
                    image,
                    price,
                    stock        
                });

                const dbCategory = await Category.findAll({
                    where: {
                        name: categories
                    }
                });
                for (const data of dbCategory) {   
                    await data.addCategory(dbCategory); 
                  };

                endpointResponse({
                    res,
                    code: 200,
                    message: 'Product created successfully',
                    body: createProducts,
                  }); 

                } else {
                    throw new ErrorObject({error: "the product already exists"}, 404)
                }      
            };
                 
            } catch (error) {
                    const httpError = createHttpError(
                        error.statusCode,
                        `[Error retrieving products] - [product - POST]: ${error.message}`,
                      )
                      next(httpError)          
                }   
            }
};