const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
module.exports = (app) => {
    // create and end-point 
app.post('/register',
AuthenticationControllerPolicy.register,
AuthenticationController.register )
 
}
