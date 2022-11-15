const {ErrorObject} = require("../../helpers/error")
const createHttpError = require('http-errors')
const { User } = require('../../database/models')
const { endpointResponse } = require('../../helpers/success')

// example of a controller. First call the service, then build the controller method
module.exports = {
  userCreate: async (req, res, next) => {
    const { fullName, email, password, phone } = req.body;
    try{
      const userEmail = await User.findAll({
        where: {
          email: email
            }
      })
    
      if(userEmail.length){
          throw new ErrorObject("That email is already in use", 400)
      }
    
      const response = await User.create({
        fullName, email, password, phone
      })
      
      endpointResponse({
        res,
        code:201,
        message: 'User retrieved successfully',
        body: response,
      })

    }catch(error){
        const httpError = createHttpError(
            error.statusCode,
            `[Error create users] - [UserCreateControllers - POST]: ${error.message}`,
          )
          next(httpError)
    }
  }
}