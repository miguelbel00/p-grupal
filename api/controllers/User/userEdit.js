const createHttpError = require("http-errors");
const { User } = require("../../database/models");
const { endpointResponse } = require("../../helpers/success");
const { ErrorObject } = require("../../helpers/error");
const bcrypt = require('bcrypt')

module.exports = {
  editUser: async (req, res, next) => {
    try {
      const { userId, fullName, password, phone, email,isAdmin } = req.body;
      if (!userId || !fullName || !password || !phone ||!email || !isAdmin)
        throw new ErrorObject("Missing parameters", 404);

      const userFound = await User.findByPk(userId);

      if (!userFound) throw new ErrorObject("User not found", 400);
      const hasedPass = password ? await bcrypt.hash(password,10) : ""
      const responce = await userFound.update({ fullName, password:hasedPass, phone, email ,isAdmin});
      await userFound.save();
      endpointResponse({
        res,
        code: 200,
        message: "User successfully edit",
        body: responce,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error Edit User] - [UserEditController - PUT]: ${error.message}`
      );
      next(httpError);
    }
  },
};
