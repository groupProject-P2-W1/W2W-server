const { User } = require("../models/index")

const { User } = require("../models/index")
const { compare } = require('../helpers/bcrypt')
const { signToken } = require("../helpers/jwt")


class UserController {
    static signUp(req,res, next){
        const payload = {
            email: req.body.email,
            password: req.body.password
        }
        User.create(payload)
        .then(data => {
            res.status(201).json({
                email: data.email,
                id: data.id
            })
        })
        .catch(err => {
            // console.log(err, "masuk ke sini bro")
            next(err)
        })
    }
    static signIn(req,res, next){
        const payload = {
            email: req.body.email,
            password: req.body.password
        }
        User.findOne({
            where: {
                email: payload.email
            }
        })
        .then(data => {
            if (!data){
                throw res.status(401).json({
                    message: "wrong email/password"
                })
            }
            else if(!compare(payload.password, data.password)){
                throw res.status(401).json({
                    message: "wrong email/password"
                })
            }
            else {
                const acces_token = signToken({
                    id: data.id,
                    email: data.email
                })
                res.status(200).json({acces_token})
            }
        })
        .catch(err => {
            // console.log(err, "masuk ke sini bro")
            next(err)
        })
    }
}