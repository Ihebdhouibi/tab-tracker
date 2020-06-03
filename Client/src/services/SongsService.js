import Api from '@/services/Api'

export default {
  getSongs () {
    return Api().get('songs')
  },
  createSong (song) {
    return Api().post('songs', song)
  },
  showSong (songId) {
    return Api().get(`songs/${songId}`)
  }
}
