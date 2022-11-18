const {ErrorObject} = require("../../helpers/error")
const createHttpError = require('http-errors')
const { User } = require('../../database/models')
const { endpointResponse } = require('../../helpers/success')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  createUser: async (req, res, next) => {
    const { fullName, email, password, phone, avatar} = req.body;
    try{
      const userEmail = await User.findAll({
        where: {
          email: email
            }
      })
    
      if(userEmail.length){
          throw new ErrorObject("That email is already in use", 400)
      }
      const hasedPass = password ? await bcrypt.hash(password,10) : false
      const userCreated = await User.create({
        fullName, email, avatar, password:hasedPass, phone,
      })

      const token = jwt.sign( {user:userCreated} , process.env.SECRETO, {expiresIn: '1h'})
      endpointResponse({
        res,
        code:201,
        message: 'User retrieved successfully',
        body: {token},
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