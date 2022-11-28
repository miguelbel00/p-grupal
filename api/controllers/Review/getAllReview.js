const {ErrorObject} = require("../../helpers/error")
const createHttpError = require('http-errors')
const { Review } = require('../../database/models')
const { endpointResponse } = require('../../helpers/success')

module.exports = {
  getAllReview: async (req, res, next) => {
    
    try{
      const response = await Review.findAll()
      
      endpointResponse({
        res,
        code:201,
        message: 'All Reviews',
        body: response,
      })

    }catch(error){
        const httpError = createHttpError(
            error.statusCode,
            `[Error Get All Reviews] - [GetAllReviewControllers - GET]: ${error.message}`,
          )
          next(httpError)
    }
  }
}