const {Song} = require('../models')

module.exports = {
    // fetch all songs api 
    async getSongs (req,res) {
        try {
            const song = await Song.findAll()
            res.send(song)
        } catch (err) {
            res.status(500).send({
                error: 'An error occured trying to fetch songs'
            })
        }
    },
    // fetch a single song api
    async showSong (req,res) {
        try {
            const song = await Song.findByPk(req.params.songId)
            res.send(song)
        } catch (err) {
            res.status(500).send({
                error: 'An error occured trying to fetch the requested song'
            })
        }
    },
    // create a song api
    async createSong (req,res) {
        try {
            const song = await Song.create(req.body)
            res.send(song)
        } catch (err) {
            res.status(500).send({
                error: 'An error occured trying to create a song'
            })
        }
    },
    // edit a song 
    async put (req,res) {
        try {
            const song = await Song.update(req.body, {
                where: {
                    id: req.params.songId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'An error occured trying to edit a song'
            })
        }
    },
}