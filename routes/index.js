const router = require("express").Router();

const movieRoutes = require("./movie");
const userRoutes = require("./user");

router.use("/users", userRoutes);
router.use("/movies", movieRoutes);

module.exports = router;
