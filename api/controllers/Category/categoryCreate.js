const createHttpError = require('http-errors')
const { Category } = require('../../database/models')
const { endpointResponse } = require('../../helpers/success')
const {ErrorObject} = require('../../helpers/error')

module.exports = {
  createCategory: async (req, res, next) => {
    try {
      const {name} = req.body;
      if (!name) throw new ErrorObject('Missing parameters',404)
      const response = await Category.create({name})

      endpointResponse({
        res,
        code:201,
        message: 'Category create successfully',
        body: response,
      })

    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error Creating Category] - [categoryCreateController - POST]: ${error.message}`,
      )
      next(httpError)
    }
  },
}