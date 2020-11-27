const router = require("express").Router()
const authenticate = require("../middlewares/authentication")
const MovieController = require("../controllers/MovieController")
const Omdb = require("../controllers/omdbApi")

router.use(authenticate)
router.get("/popular", MovieController.getPopularMovies)
router.get("/", Omdb.omdb)

module.exports = router