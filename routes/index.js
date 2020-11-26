const router = require("express").Router();
const RelatedMovies = require("../controllers/related-movies");
const movieRoutes = require("./movie")
const userRoutes = require("./user")

router.use("/users", userRoutes)
router.use("/movies", movieRoutes)
router.get("/movies/similarmovies/:title", RelatedMovies.getSimilarMovies);

module.exports = router;
