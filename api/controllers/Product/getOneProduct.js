const createHttpError = require("http-errors")
const { Product, Category, Transaction, Review } = require('../../database/models');
const { endpointResponse } = require('../../helpers/success');
const { ErrorObject } = require('../../helpers/error');



module.exports = {
    getOneProduct: async (req, res, next) => {
        const { productId } = req.params;
        try {
            if(!productId)throw new ErrorObject("Missing params", 404)
            const productFound = await Product.findByPk(productId,{
                include: [{
                    model: Category,
                    attributes: ["id","name"],
                    through: { attributes: [] }
                },
                {
                    model: Transaction,
                    attributes: ["id","description","status","value"],
                    through: { attributes: [] }
                },
                {
                    model: Review,
                    attributes: ["id","comment", "rating", "createdAt"],
                }]
            })

            if(productFound === null) throw new ErrorObject("Product not found", 404)
            endpointResponse({
                res,
                code: 200,
                message: 'Product found',
                body: productFound,
            })
        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error get One product] - [getOneProduct - GET]: ${error.message}`,
            )
            next(httpError)
        }
    },
};