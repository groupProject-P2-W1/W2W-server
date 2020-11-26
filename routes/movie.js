const router = require("express").Router()
const authenticate = require("../middlewares/authentication")
const MovieController = require("../controllers/MovieController")

router.use(authenticate)
router.get("/popular", MovieController.getPopularMovies)

module.exports = router