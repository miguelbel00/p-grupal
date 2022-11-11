const {ErrorObject} = require("../../helpers/error")
const createHttpError = require('http-errors')
const { Review } = require('../../database/models')
const { endpointResponse } = require('../../helpers/success')

// example of a controller. First call the service, then build the controller method
module.exports = {
  reviewCreate: async (req, res, next) => {
    const { comment, rating } = req.body;
    
    try{
        
      if(!comment || !rating ){
          throw new ErrorObject("missing parameters", 404)
      }
    
      const response = await Review.create({
        comment, rating
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