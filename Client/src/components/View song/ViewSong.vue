<template>
  <v-layout>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="purple">
          <v-btn icon dark @click="navigateTo" >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{song.title}}</v-toolbar-title>
        </v-toolbar>
       <v-card
    class="mx-auto pt-12"
    max-width="1500"
    height="800"
    outlined
    fluid
  >
    <v-row>
      <v-list-item three-line>
      <Song-Information :song="song" />

     <v-flex xs-6>
       <youtube :video-id="song.youtubeId" :player-width="400" :player-height="180"></youtube>
     </v-flex>
    </v-list-item>
    </v-row>
    <v-divider></v-divider>
    <br>
    <v-row>
    <Song-lyrics :song="song" />
    <!-- <v-divider></v-divider> -->
    <v-flex xs-6>
    <div class="text-left pr-12"><h3>Song tab: </h3>
    <textarea
      cols="50"
      rows="10"
      v-model="song.tab"
    />
    </div>
    </v-flex>
    </v-row>
  </v-card>
    </v-card>
    </v-dialog>
       </v-layout>
</template>
<script>
import SongsService from '@/services/SongsService'
import SongInformation from '@/components/View song/SongInformation'
import SongLyrics from './SongLyrics'
export default {
  components: {
    SongInformation,
    SongLyrics
  },
  data () {
    return {
      song: {},
      dialog: true
    }
  },
  methods: {
    navigateTo () {
      this.dialog = false
      this.$router.push({
        name: 'Home'
      })
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.showSong(songId)).data
  }
}
</script>
<style scoped>
textarea {
  font-family: monospace;
  border: none;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
