const transporter = require('../../config/mailer.js')
const createHttpError = require('http-errors');
const { endpointResponse } = require('../../helpers/success');


module.exports = {
    sendEmail: async (req, res, next) => {
        const { email, fullName, description, value ,createTransaction}= req.body
        try {
            await transporter.sendMail({
                from: '"ASTRO GAMER" <finalp439@gmail.com>', 
                to: email, 
                subject: "Purchase Made ✔", 
                html: 
                `<h1>Hi! ${fullName}...</h1>
                <h2>Thanks for you Purchase</h2>
                <h3>Transaction Id: ${createTransaction.id}</h3>
                <h3>Purchase detail</h3>
                <ul>
                    ${description.split('|').map((e)=> `<li>${e}</li>`)}
                </ul>
                <h2>Total: U$D ${value}</h2>` 
              }); 
              endpointResponse({
                  res,
                  code: 201,
                  message: 'Email enviado',

                });  
        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error post mailer] - [email - POST]: ${error.message}`,
              )
              next(httpError) 
        }
    }
}