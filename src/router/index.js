const { Router } = require('express')
const router = Router()
const esperandig = require('../router/computadora')

router.use("/esperando", esperandig)



module.exports = router;