const router = require("express").Router();
const RelatedMovies = require("../controllers/related-movies");
const ControllerMovies = require("../controllers/ControllerMovies")
const userRoutes = require("./user")

router.use("/users", userRoutes)
router.get("/movies/similarmovies/:title", RelatedMovies.getSimilarMovies);
router.get("/movies/popular", ControllerMovies.getPopularMovies)

module.exports = router;
