const {ErrorObject} = require("../../helpers/error")
const createHttpError = require('http-errors')
const { Transaction } = require('../../database/models')
const { endpointResponse } = require('../../helpers/success')

module.exports = {
  transactionUpdate: async (req, res, next) => {
    const { transactionId,status} = req.body;
    try{

      const transactionFound = await Transaction.findByPk(transactionId)

      if(!transactionFound){
          throw new ErrorObject("Transaction not found", 400)
      }

      const response = await Transaction.update({status}, {where:{id: transactionId}})

      endpointResponse({
        res,
        code:202,
        message: 'Transaction was updated',
        body: response,
      })

    }catch(error){
        const httpError = createHttpError(
            error.statusCode,
            `[Error Update Transaction] - [TransactionUpdateController - PUT]: ${error.message}`,
          )
          next(httpError)
    }
  }
}