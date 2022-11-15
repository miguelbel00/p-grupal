const {ErrorObject} = require("../../helpers/error")
const createHttpError = require('http-errors')
const { User } = require('../../database/models')
const { endpointResponse } = require('../../helpers/success')

module.exports = {
  getAllUser: async (req, res, next) => {
    
    try{

      const response = await User.findAll()

      endpointResponse({
        res,
        code:201,
        message: 'All Users',
        body: response,
      })

    }catch(error){
        const httpError = createHttpError(
            error.statusCode,
            `[Error Get All Users] - [GetAllUsersController - GET]: ${error.message}`,
          )
          next(httpError)
    }
  }
}