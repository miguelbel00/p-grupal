const createHttpError = require("http-errors");
const { Category } = require("../../database/models");
const { endpointResponse } = require("../../helpers/success");
const { ErrorObject } = require("../../helpers/error");

module.exports = {
  deleteCategory: async (req, res, next) => {
    try {
      const { categoryId } = req.params;
      if (!categoryId) throw new ErrorObject("Missing parameters", 404);
      const categoryFound = await Category.findByPk(categoryId);

      if (!categoryFound) throw new ErrorObject("Category not found", 400);

      const responce = await categoryFound.destroy({
        where: { id:categoryId },
      });
      endpointResponse({
        res,
        code:200,
        message: "Category successfully deleted",
        body: responce,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error Delete Category] - [categoryDeleteController - DELETE]: ${error.message}`
      );
      next(httpError);
    }
  },
};
