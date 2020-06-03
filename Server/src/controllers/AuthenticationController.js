const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7 
    const userJson = user.toJSON()
    return jwt.sign(userJson, config.authentication.jwtSecret ,{
        expiresIn: ONE_WEEK
    })
}
module.exports = {
async register (req , res) {
    try{
        const user = await User.create(req.body)
        const userJson = user.toJSON()
        res.send({
            user:  userJson,
            token: jwtSignUser(user)
            
        })
      }
    catch (err){
         res.status(400).send({
             error: 'Email already in use '  
             
         })
        
    }
},
async login(req , res){
    try{
        const  {email , password , name} = req.body
        const  user = await User.findOne({
            where: {
                email: email
            }
        })
        if(!user){
            return res.status(403).send({
                error: 'Email doesn\'t exist '
            })
        }
        const isPasswordValid = await user.comparePassword(password)
        if(!isPasswordValid){
            return res.status(403).send({
                error: 'Wrong password'
            })
        }
        const userJson = user.toJSON()
        res.send({
            user:  userJson,
            token: jwtSignUser(user)
            
        })
    }
    catch (err){
        res.status(500).send({
            error: 'An error has occured trying to login'
        })
    }
}
}