const axios = require("axios");

class Omdb {
    static omdb(req, res, next) {
        let title = req.query.t // search movie by IMDB ID kalau mau ganti jadi by title 'i=' di url ganti jadi 't='
        // console.log(imdbId);
        axios({
            url: `http://www.omdbapi.com/?t=${title}&apikey=${process.env.OMDB}`,
            method: 'GET'
        })
        .then(response => {
            console.log(response.data);
            res.status(200).json(response.data);
        })
        .catch(err => {
            res.json(err)
        })

    }
}

module.exports = Omdb