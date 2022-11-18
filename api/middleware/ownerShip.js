const createHttpError = require('http-errors')
const { ErrorObject } = require("../helpers/error");

module.exports = {
  ownership: async (req, res, next) => {
    try {

      if (req.user.id !== parseInt(req.params.id) && req.user.isAdmin !== false)
        throw new ErrorObject('You dont have permission to access', 403);

      next();
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error ownerShip] - [Middleware - Autorization]: ${error.message}`
      );
      next(httpError);
    }
  }
}