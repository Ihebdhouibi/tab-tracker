const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongController = require('./controllers/SongsController')
module.exports = (app) => {
    // create register end-point 
app.post('/register',
AuthenticationControllerPolicy.register,
AuthenticationController.register )
    // create login api

    app.post('/login',
AuthenticationController.login )

    // fetch all songs api 
    app.get('/songs',
    SongController.getSongs)
    // create a song api 
    app.post('/songs',
    SongController.createSong)
 
}
