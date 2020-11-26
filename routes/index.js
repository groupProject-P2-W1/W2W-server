const router = require("express").Router();
const RelatedMovies = require("../controllers/related-movies");

router.get("/movies/similarmovies/:title", RelatedMovies.getSimilarMovies);

module.exports = router;
