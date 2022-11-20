const createHttpError = require('http-errors');
const { Product, Category } = require('../../database/models');
const { endpointResponse } = require('../../helpers/success');
const { ErrorObject } = require('../../helpers/error');
const cloudinary = require('../../config/cloudinary')


module.exports = {
    createProducts: async (req, res, next) => {
        const { name, description, image, price, stock, categories } = req.body;

            try{ 
                 if (!name || !description || !image || !price || !categories) {
                        throw new ErrorObject('Missing parameters', 404)   
                };

                if (name) {
                  const allproduct = await Product.findAll();
                  const productCheck = allproduct.find(data => data.name === name);

                  if (!productCheck) { 
                  const result = await cloudinary.uploader.upload  (image[0], {
                    upload_preset: 'pf_grupal_preset',
                    width: 300,
                    height: 300,
                    crop: 'pad'
                  })
                    
                  const createProducts = await Product.create({
                    name,
                    description,
                    image: [
                        result.secure_url
                    ],
                    price,
                    stock,
                    sold: 0    
                });

                const dbCategory = await Category.findAll({
                    where: {
                        name: categories
                    }
                });
                createProducts.addCategory(dbCategory); 
                endpointResponse({
                    res,
                    code: 201,
                    message: 'Product created successfully',
                    body: createProducts,
                  });  

              } else {
                    throw new ErrorObject("The product already exists", 404)
                }  

            }; 
                 
            } catch (error) {
                    const httpError = createHttpError(
                        error.statusCode,
                        `[Error post products] - [product - POST]: ${error.message}`,
                      )
                      next(httpError)          
                }   
            }
};