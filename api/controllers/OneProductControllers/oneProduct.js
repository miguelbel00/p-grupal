const {ErrorObject} = require("../../helpers/error")
const createHttpError = require('http-errors')
const { Product, Category, Review } = require('../../database/models')
const { endpointResponse } = require('../../helpers/success')

// example of a controller. First call the service, then build the controller method
module.exports = {
  oneProduct: async (req, res, next) => {
      const { productId } = req.params
    try {
      const products = await Product.findByPk(productId);
      const dbcategory =  await Category.findAll();
      const dbReview = await Review.findAll();
      const productCategory = products.addCategory(dbcategory)
      const allproduct = productCategory.addReview(dbReview)
      if (products) {
        endpointResponse({
          status: true,
          code: 200,
          message: 'the product was found',
          body: allproduct
        })
      } else {
        throw new ErrorObject('the product was not found', 400)
      }
        
    }catch(error){
        const httpError = createHttpError(
            error.statusCode,
            `[Error one product] - [OneProductControllers - GET]: ${error.message}`,
          )
          next(httpError)
    }
  }
}