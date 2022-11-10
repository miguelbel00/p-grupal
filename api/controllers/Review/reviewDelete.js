const {ErrorObject} = require("../../helpers/error")
const createHttpError = require('http-errors')
const { Review } = require('../../database/models')
const { endpointResponse } = require('../../helpers/success')

// example of a controller. First call the service, then build the controller method
module.exports = {
  reviewDelete: async (req, res, next) => {
    
    try {
        const { reviewId } = req.params;
        if (!reviewId) throw new ErrorObject("Missing parameters", 404);
        const reviewFound = await Review.findByPk(reviewId);
  
        if (!reviewFound) throw new ErrorObject("Review not found", 400);
      
        const responce = await reviewFound.destroy({
            where: { id:reviewId },
          });
          endpointResponse({
            res,
            code:200,
            message: "Review successfully deleted",
            body: responce,
          });
        } catch (error) {
          const httpError = createHttpError(
            error.statusCode,
            `[Error Delete Review] - [reviewDeleteController - DELETE]: ${error.message}`
          );
          next(httpError);
        }
      },
    };