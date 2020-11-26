const axios = require('axios')

class ControllerMovies {
    static getPopularMovies(req, res) {
        let imageUrl
        axios({
            url: `https://api.themoviedb.org/3/configuration?api_key=${process.env.TMDB_API_KEY}`
        })
        .then(response => {
            imageUrl = response.data.images.base_url + 'original'
            console.log(imageUrl);
            return axios({
                    url: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`,
                    method: 'GET'
                })
        })
        .then(response => {
            const movies = response.data.results.map(element => {
                return {
                    movieTitle: element.title,
                    moviePoster: imageUrl + element.backdrop_path
                }
            })
            res.send(movies)
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = ControllerMovies