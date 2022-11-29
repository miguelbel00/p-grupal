const transporter = require('../../config/mailer.js')
const createHttpError = require('http-errors');
const { endpointResponse } = require('../../helpers/success');
const { User } = require('../../database/models');

function newError(errorMsj) {
     throw(errorMsj)
}

module.exports = {
    sendEmailRegister: async (req, res, next) => {
        const {email, fullName}= req.body
        try {
            await transporter.sendMail({
                from: '"ASTRO GAMER" <finalp439@gmail.com>', 
                to: email, 
                subject: "Email-Registered 📧✔", 
                html: 
                `<h1>Hi! ${fullName}...</h1>
                <h2>Your email was successfully registered.</h2>
                <img width={200} src="https://i.pinimg.com/originals/ca/9c/d3/ca9cd37ececba2e35ea0c63349d5921f.gif" alt="" />
                ` 
              })
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