const Joi = require('joi')

module.exports = {
    register(req, res , next){
        const schema ={
            email : Joi.string().email(),
            password : Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,16}$') 
            )
        }
        const {error , value } = Joi.validate(req.body , schema)
        
        if(error){
            switch(error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error:`You must provide a valid email `
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `Wrong password : Must contains only lowercase, Uppercase characters and numerics <br> and a length of 8 to 16`
                                             
                    })
                    break
                default:
            }
        }
        else{
            next()
        }
    }
}