const {ErrorObject} = require("../../helpers/error")
const createHttpError = require('http-errors')
const { Transaction } = require('../../database/models')
const { endpointResponse } = require('../../helpers/success')

// example of a controller. First call the service, then build the controller method
module.exports = {
  createTransaction: async (req, res, next) => {
    const { value, description, status} = req.body;
    try{

    
      const response = await Transaction.create({
        value, description, status
      })
      
      endpointResponse({
        res,
        code:201,
        message: 'Transaction retrieved successfully',
        body: response,
      })

    }catch(error){
        const httpError = createHttpError(
            error.statusCode,
            `[Error create transaction] - [TransactionCreateControllers - POST]: ${error.message}`,
          )
          next(httpError)
    }
  }
}