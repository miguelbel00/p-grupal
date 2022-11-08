const server = require("./src/app.js")
const { connect } = require('./src/db')
const PORT = 3001


connect.sync({force:true}).then(()=>{
    server.listen(process.env.PORT || PORT, () => {console.log(`server on port ${PORT}`)})
})

// server.listen(PORT, ()=> console.log("funciona"))