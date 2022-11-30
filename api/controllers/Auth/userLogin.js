const createHttpError = require("http-errors");

const { endpointResponse } = require("../../helpers/success");
const { ErrorObject } = require("../../helpers/error");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
const { User } = require("../../database/models");
dotenv.config();

module.exports = {
  loginUser: async (req, res, next) => {
    try {
      const user = await User.findOne({ where: { email: req.body.email } });
      if (!user) return  res.json({error:`User with email ${req.body.email} does not exist`})
      let token 
      if (!req.body?.google) {
        const validatePass = await bcrypt.compare(req.body.password, user.password)
        if(!validatePass) return res.json({error:"You have entered an invalid password"})
         token = jwt.sign({ id: user.id,email:user.email,isAdmin:user.isAdmin }, process.env.JWT_SECRETO, {expiresIn: '20h'})
  
      }else{
        token = jwt.sign({ id: user.id,email:user.email,isAdmin:user.isAdmin }, process.env.JWT_SECRETO, {expiresIn: '20h'})

      }
    
      endpointResponse({
        res,
        code: 200,
        message: "Login successfully",
        body: {token},
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error auth login] - [loginController - POST]: ${error.message}`
      );
      next(httpError);
    }
  }
};