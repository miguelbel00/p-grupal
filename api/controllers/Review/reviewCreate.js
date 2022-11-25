const {ErrorObject} = require("../../helpers/error")
const createHttpError = require('http-errors')
const { Review } = require('../../database/models')
const { endpointResponse } = require('../../helpers/success')

// example of a controller. First call the service, then build the controller method
module.exports = {
  reviewCreate: async (req, res, next) => {
    const { comment, rating, productId, userId } = req.body;
    
    try{
        
      if(!comment || !rating || !productId || !userId){
          throw new ErrorObject("missing parameters", 404)
      }
    
      const response = await Review.create({
        productId, userId, comment, rating
      })
      
      endpointResponse({
        res,
        code:201,
        message: 'Review successfully created',
        body: response,
      })

    }catch(error){
        const httpError = createHttpError(
            error.statusCode,
            `[Error create review] - [ReviewCreateControllers - POST]: ${error.message}`,
          )
          next(httpError)
    }
  }
}