const transporter = require('../../config/mailer.js')
const createHttpError = require('http-errors');
const { endpointResponse } = require('../../helpers/success');
const { User } = require('../../database/models');
const bcrypt = require('bcrypt')

function newError(errorMsj) {
    throw (errorMsj)
}


function passwordCreate() {
    let newPass = ""
    const leters = ["A", "X", "R", "W", "T", "G", "S"]

    for (let i = 0; i < 2; i++) {
        for (let x = 0; x < 4; x++) {
            i === 0
                ?
            newPass += leters[Math.round(Math.random() * (leters.length - 1))]
                :
            newPass += Math.round(Math.random() * 9)
        }
    } return newPass.slice(0, 4) + "-" + newPass.slice(4)
}

module.exports = {
    
    recoverPassword: async (req, res, next) => {
        
        const password = passwordCreate()
        const hasedPass = await bcrypt.hash(password,10)
        const { email } = req.body
        try {
            const theUser = await User.findOne({where:{email:email}})
            

            email && theUser &&
            

            await User.update({password: hasedPass}, {where:{id: theUser.id}})

            await transporter.sendMail({
                from: '"ASTRO GAMER" <finalp439@gmail.com>',
                to: email,
                subject: "recover password petition. 🔒✔",
                html:
                    `<h1>Hi! ${theUser.fullName} ..</h1>
                <h2>this is your temp password: ${password}.</h2>
                <h3>please change the password for security...</h3>
                <img width={200} src="https://media.tenor.com/9Ez46wr-voMAAAAC/lock.gif" alt="" />
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