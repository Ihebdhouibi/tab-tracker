const AuthenticationController = require('./controllers/AuthenticationController')

module.exports = (app) => {
    // create and end-point 
app.post('/register',
AuthenticationController.register )
 
}
