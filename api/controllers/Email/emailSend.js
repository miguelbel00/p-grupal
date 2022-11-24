const transporter = require('../../config/mailer.js')
const createHttpError = require('http-errors');
const { endpointResponse } = require('../../helpers/success');


module.exports = {
    sendEmail: async (req, res, next) => {
        try {
            await transporter.sendMail({
                from: '"Compra Realizada" <finalp439@gmail.com>', // sender address
                to: "agustinhummel7@gmail.com", // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Hello world?", // plain text body
                html: `<h1>GRACIAS POR TU COMPRA</h1>`, // html body
              }); 
              endpointResponse({
                  res,
                  code: 201,
                  message: 'Email enviado',
                  //body: sendEmail,
                });  
        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error post products] - [product - POST]: ${error.message}`,
              )
              next(httpError) 
        }
    }
}