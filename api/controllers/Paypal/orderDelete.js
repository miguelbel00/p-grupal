// ELIMINAR ORDER 
const createHttpError = require('http-errors');

module.exports = {
    orderDelete: async (req, res, next) => {
        try {
            res.redirect(process.env.FRONT_URL)
        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error delete order] - [orderDelete - DELETE]: ${error.message}`,
              )
              next(httpError)   
        }
        
    }}