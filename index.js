const express = require('express')
const router = express()

router.use(require('./src/router/index'))

router.listen(3000, () => {console.log("Server On")})