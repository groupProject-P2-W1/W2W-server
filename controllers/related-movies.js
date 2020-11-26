const axios = require("axios");

class RelatedMovies {
  static getSimilarMovies(req, res, next) {
    let moviequery = req.params.title; // untuk detail per movie nya bawa parameter judul movie
    axios({
      url: `https://tastedive.com/api/similar?info=1&q=${moviequery}&k=${process.env.JWT_SECRET}`,
      method: "GET",
    })
      .then((data) => {
        res.json(data.Results);
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = RelatedMovies;
