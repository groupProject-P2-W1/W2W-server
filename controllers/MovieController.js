const axios = require('axios')

class MovieController {
    static getPopularMovies(req, res, next) {
        let imageUrl
        axios({
            url: `https://api.themoviedb.org/3/configuration?api_key=${process.env.TMDB_API_KEY}`
        })
        .then(response => {
            imageUrl = response.data.images.base_url + 'original'
            return axios({
                    url: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`,
                    method: 'GET'
                })
        })
        .then(response => {
            const movies = response.data.results.map(element => {
                return {
                    movieTitle: element.title,
                    moviePoster: imageUrl + element.backdrop_path,
                    movieOverview: element.overview
                }
            })
            res.status(200).json(movies)
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = MovieController