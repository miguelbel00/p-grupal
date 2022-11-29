const {ErrorObject} = require("../../helpers/error")
const createHttpError = require('http-errors')
const { Transaction } = require('../../database/models')
const { endpointResponse } = require('../../helpers/success')


// example of a controller. First call the service, then build the controller method
module.exports = {
  getAllTransaction: async (req, res, next) => {

      try {
        const response = await Transaction.findAll();
      endpointResponse({
        res,
        code:201,
        message: 'All Transactions',
        body: response,
      })

    }catch(error){
        const httpError = createHttpError(
            error.statusCode,
            `[Error All transaction] - [getAlltransaction - GET]: ${error.message}`,
          )
          next(httpError)
    }
  }
}