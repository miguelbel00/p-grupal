const createHttpError = require("http-errors");
const { User } = require("../../database/models");
const { endpointResponse } = require("../../helpers/success");
const { ErrorObject } = require("../../helpers/error");

module.exports = {
  getOneUser: async (req, res, next) => {
    try {
      const { userId } = req.params;

      const userFound = await User.findByPk(userId);
      if (!userFound) throw new ErrorObject("User not found", 400);

      endpointResponse({
        res,
        code: 200,
        message: "User Found",
        body: userFound,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error Get One User] - [getOneUserController - GET]: ${error.message}`
      );
      next(httpError);
    }
  },
};
