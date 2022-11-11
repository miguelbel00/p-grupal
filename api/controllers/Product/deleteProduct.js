const createHttpError = require('http-errors');
const { Product } = require('../../database/models');
const { endpointResponse } = require('../../helpers/success');
const { ErrorObject } = require('../../helpers/error');

module.exports = {
    deleteProduct: async (req, res, next) => {
        const { productId } = req.params;
        try {
            if(!productId)throw new ErrorObject("missing params", 404)
            const deleteProduct = await Product.destroy({ where: { id: productId } })
            if(deleteProduct === null) throw new ErrorObject("product not found", 404)
            endpointResponse({
                res,
                code: 204,
                message: 'the product was deleted',
                body: {msj: `${deleteProduct} were eliminated`},
            })  
        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error deleting products] - [deleteProducts - DELETE]: ${error.message}`,
            )
            next(httpError)
        }
    },
};
