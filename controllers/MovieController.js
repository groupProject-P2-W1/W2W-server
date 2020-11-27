const axios = require('axios')
const { Watchlist } = require('../models/index')

class MovieController {
    static getPopularMovies(req, res, next) {
        console.log(req.query.title)
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

    static addWatchlist(req, res, next) {
        const movie = {
            title: req.body.title,
            poster: req.body.poster,
            UserId: req.loggedInUser.id
        }

        Watchlist.create(movie)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Internal Server Error'
            })
        })
    }

    static deleteWatchlist(req, res, next) {
        const movieId = req.params.id

        Watchlist.destroy({
            where: {
                id: movieId
            }
        })
        .then(data => {
            res.status(200).json({
                message: 'Data deleted'
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Internal Server Error'
            })
        })
    }
    static list (req, res, next){
        Watchlist.findAll({where: {UserId: req.loggedInUser.id}})
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal Server Error'
            })
        })
    }
}

module.exports = MovieController