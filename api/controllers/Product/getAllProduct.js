const createHttpError = require('http-errors');
const { Product, Category, Review, Transaction } = require('../../database/models');
const { endpointResponse } = require('../../helpers/success');
const { ErrorObject } = require('../../helpers/error');
const { where } = require('sequelize');

module.exports = {
    getAllProduct: async (req, res, next) => {
        
     
        try {
            const allproducts = await Product.findAll({
                include: [
                  {
                    model: Category,
                  },
                  {
                    model: Transaction
                  },
                  {
                    model: Review
                  }
              ]})
              
            endpointResponse({
                res,
                code: 200,
                message: 'All products',
                body: allproducts
            })

 
        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error get all products] - [getAllProducts - GET]: ${error.message}`,
            )
            next(httpError)
        }
    },
};