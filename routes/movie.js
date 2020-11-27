const router = require("express").Router()
const authenticate = require("../middlewares/authentication")
const MovieController = require("../controllers/MovieController")
const Omdb = require("../controllers/omdbApi")

router.use(authenticate)
router.get("/popular", MovieController.getPopularMovies)
router.get("/", Omdb.omdb)
router.post("/watchlist", MovieController.addWatchlist)
router.delete("/watchlist/:id", MovieController.deleteWatchlist)

module.exports = router