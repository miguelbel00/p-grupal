const createHttpError = require('http-errors')
const { Category,Product } = require('../../database/models')
const { endpointResponse } = require('../../helpers/success')
const {ErrorObject} = require('../../helpers/error')

module.exports = {
  getAllCategory: async (req, res, next) => {
    try {
      const response = await Category.findAll({
        include: { 
          model: Product
        }})

      endpointResponse({
        res,
        code:201,
        message: 'All Categories',
        body: response,
      })

    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error Get All Categories] - [getAllCategoryController - GET]: ${error.message}`,
      )
      next(httpError)
    }
  },
}