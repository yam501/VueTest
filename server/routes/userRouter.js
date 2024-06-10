const Router = require("express")
const router  = new Router()
const userController = require("../controllers/userController")

router.get('/get', userController.getUser)
router.put('/change', userController.changeUser)
router.get('/positions', userController.getPositions)

module.exports = router