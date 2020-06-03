<template>
<div>
    <v-dialog
      v-model="dialog"
      width="800px"
    >
    <v-form  ref="form">
      <v-card>
        <v-card-title class="grey darken-2">
          Edit Song
        </v-card-title>
        <v-container>
          <v-row class="mx-2">
            <v-col
              class="align-center justify-space-between"
              cols="12"
            >
              <v-row
                align="center"
                class="mr-0"
              >
                <v-avatar
                  size="70px"
                  class="mx-3"
                >
                  <img
                    src="https://i7.pngflow.com/pngimage/96/321/png-creative-musical-symbol-movement-pictures-music-note-musical-elements-clipart.png"
                    alt=""
                  >
                </v-avatar>
                <v-text-field
                  placeholder="Title"
                  v-model="song.title"
                  required
                 :rules="[required]"
                ></v-text-field>
                <v-text-field
                  prepend-icon="mdi-account-music"
                  placeholder="artist"
                  v-model="song.artist"
                  required
                 :rules="[required]"
                ></v-text-field>
              </v-row>
            </v-col>
            <v-col cols="6">
               <v-select
                  :items="genreList"
                  label="Genre"
                  v-model="song.genre"
                  prepend-icon="mdi-music-note-outline"
                  required
                 :rules="[required]"
               ></v-select>
            </v-col>
            <v-col cols="6">
              <v-text-field
                prepend-icon="mdi-album"
                placeholder="Album"
                v-model="song.album"
                required
                :rules="[required]"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                prepend-icon="mdi-image"
                placeholder="Album Image"
                v-model="song.albumImageUrl"
                required
                :rules="[required]"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                prepend-icon="mdi-youtube"
                placeholder="Youtube Link"
                v-model="song.youtubeId"
                required
                 :rules="[required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                label="Lyrics"
                outlined
                rows="3"
                row-height="15"
                v-model="song.lyrics"
                required
                 :rules="[required]"
              ></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-textarea
                label="Song Tab"
                outlined
                rows="3"
                row-height="15"
                v-model="song.tab"
                required
                 :rules="[required]"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <span class="red--text" v-if="error">
          {{error}}
          </span>
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="dialog = false"
          >Cancel</v-btn>
          <v-btn
            text
            color="primary"
            @click="reset"
          >Reset</v-btn>
          <v-btn
            text
            color="primary"
            @click="save"
          >Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
    </v-dialog>
</div>
</template>
<script>
import SongService from '@/services/SongsService'
export default {
  data () {
    return {
      error: null,
      dialog: true,
      song: {
        artist: null,
        title: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      required: (value) => !!value || 'Fieldrequired',
      genreList: [
        'Rap', 'Reggae', 'Hip Hop', 'Blues', 'Country'
      ]
    }
  },
  methods: {
    async save () {
      const allRequiredFieldsRespected = this.$refs.form.validate()
      if (!allRequiredFieldsRespected) {
        this.error = 'please fill in all required fields'
        return
      }
      const songId = this.$store.state.route.params.songId
      try {
        console.log('before put method ')
        await SongService.put(this.song, songId)
        console.log('before routing to song ')
        this.$router.push({
          name: 'Song',
          params: {
            songId: songId
          }
        })
      } catch (error) {
        console.log(error)
      }
    },
    reset () {
      this.$refs.form.reset()
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongService.showSong(songId)).data
    } catch (err) {

    }
  }
}
</script>
<style scoped>

</style>
