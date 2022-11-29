const {ErrorObject} = require("../../helpers/error")
const createHttpError = require('http-errors')
const { User } = require('../../database/models')
const { endpointResponse } = require('../../helpers/success');


// example of a controller. First call the service, then build the controller method
module.exports = {
  userDelete: async (req, res, next) => {
    
    try {
        const { userId } = req.params;
        if (!userId) throw new ErrorObject("Missing parameters", 404);
        const userFound = await User.findByPk(userId);

        if (!userFound) throw new ErrorObject("User not found", 400);
      
        const responce = await userFound.destroy({
            where: { id:userId },
          });
          endpointResponse({
            res,
            code:200,
            message: "User successfully deleted",
            body: responce,
          });
        } catch (error) {
          const httpError = createHttpError(
            error.statusCode,
            `[Error Delete User] - [UserDeleteController - DELETE]: ${error.message}`
          );
          next(httpError);
        }
      },
    };