const axios = require("axios");

class Omdb {
    static omdb(req, res, next) {
        let imdbId = req.params.imdbId // search movie by IMDB ID kalau mau ganti jadi by title 'i=' di url ganti jadi 't='
        console.log(imdbId);
        axios({
            url: `http://www.omdbapi.com/?i=${imdbId}&apikey=${process.env.OMDB}`,
            method: 'GET'
        })
        .then(response => {
            // console.log(response.data);
            res.json(response.data);
        })
        .catch(err => {
            res.json(err)
        })

    }
}

module.exports = Omdb