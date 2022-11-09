const createHttpError = require('http-errors');
const { Product, Category } = require('../../database/models');
const { endpointResponse } = require('../../helpers/success');
const { ErrorObject } = require('../../helpers/error');

module.exports = {
    postProducts: async (req, res, next) => {
        const {
            name,
            description,
            image,
            price,
            categories} = req.body;

            try {
                const createProducts = await Product.create({
                    name,
                    description,
                    image,
                    price,        
                });

                Category.addCategory(createProducts);
                
            } catch (error) {
                
            }
    }

        

};