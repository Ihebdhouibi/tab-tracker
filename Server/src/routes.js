const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
module.exports = (app) => {
    // create register end-point 
app.post('/register',
AuthenticationControllerPolicy.register,
AuthenticationController.register )
    // create login api

    app.post('/login',
AuthenticationController.login )
 
}
