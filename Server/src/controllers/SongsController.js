const {Song} = require('../models')

module.exports = {
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
    async createSong (req,res) {
        try {
            const song = await Song.create(req.body)
            res.send(song)
        } catch (err) {
            res.status(500).send({
                error: 'An error occured trying to create a song'
            })
        }
    }
}