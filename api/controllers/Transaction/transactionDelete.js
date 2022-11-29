const {ErrorObject} = require("../../helpers/error")
const createHttpError = require('http-errors')
const { Transaction } = require('../../database/models')
const { endpointResponse } = require('../../helpers/success');


// example of a controller. First call the service, then build the controller method
module.exports = {
  transactionDelete: async (req, res, next) => {
    
    try {
        const { transactionId } = req.params;
        if (!transactionId) throw new ErrorObject("Missing parameters", 404);
        const transactionFound = await Transaction.findByPk(transactionId);
  
        if (!transactionFound) throw new ErrorObject("Trasaction not found", 400);
      
        const responce = await transactionFound.destroy({
            where: { id:transactionId },
          });
          endpointResponse({
            res,
            code:200,
            message: "Transaction successfully deleted",
            body: responce,
          });
        } catch (error) {
          const httpError = createHttpError(
            error.statusCode,
            `[Error Delete Transaction] - [transactionDeleteController - DELETE]: ${error.message}`
          );
          next(httpError);
        }
      },
    };