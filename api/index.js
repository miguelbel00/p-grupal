const server = require("./src/app.js")
const { connect } = require('./src/db')
const PORT = process.env.PORT || 3001


connect.sync().then(()=>{
    server.listen(PORT, () => {console.log(`server on port ${PORT}`)})
})
