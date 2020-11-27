const router = require("express").Router()
const authenticate = require("../middlewares/authentication")
const MovieController = require("../controllers/MovieController")
const Omdb = require("../controllers/omdbApi")
const RelatedMovies = require("../controllers/related-movies");

router.use(authenticate)
router.get("/popular", MovieController.getPopularMovies)
router.get("/", Omdb.omdb)
router.post("/watchlist", MovieController.addWatchlist)
router.delete("/watchlist/:id", MovieController.deleteWatchlist)
router.get("/similarmovies/:title", RelatedMovies.getSimilarMovies);

module.exports = router;
