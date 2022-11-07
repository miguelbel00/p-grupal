const { Router } = require('express')
const router = Router()

router.get("/", (req, res) => {
    res.json({
        msg: "esperando al equipo"
    })
})


module.exports = router;