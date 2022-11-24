// ELIMINAR ORDER 
const createHttpError = require('http-errors');

module.exports = {
    orderDelete: async (req, res, next) => {
        try {
            res.redirect('http://localhost:3000')
        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error post order] - [order - POST]: ${error.message}`,
              )
              next(httpError)   
        }
        
    }}