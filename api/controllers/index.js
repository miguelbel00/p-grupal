const createHttpError = require('http-errors')
const { Test } = require('../database/models')
const { endpointResponse } = require('../helpers/success')

// example of a controller. First call the service, then build the controller method
module.exports = {
  get: async (req, res, next) => {
    try {
      const response = await Test.findAll()


      endpointResponse({
        res,
        code:300,
        message: 'Test retrieved successfully',
        body: response,
      })



    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`,
      )
      next(httpError)
    }
  },
}