<template>
<div class="mx-auto"
    fluid>
    <v-list v-for="song in songs" :key="song.id">
   <v-card
    outlined
    width="1000px"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="headline mb-4">{{song.title}}</div>
        <v-list-item-title class="overline mb-2">{{song.artist}} , {{song.genre}}</v-list-item-title>
        <v-list-item-subtitle class="text-left">{{song.lyrics}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="150"
        color="grey"
      >
      <v-img :src="song.albumImageUrl"></v-img>
      </v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
      <!-- to make song id so that each song got its own likeCounter -->
      <v-btn @click="like" retain-focus-on-click light depressed color="white">
      <v-icon left small>mdi-heart</v-icon> Like {{likeCounter}}
    </v-btn>
    <!-- View more button -->
    <v-btn depressed color="white" @click="navigateTo({name: 'Song', params: {songId: song.id}})">View more</v-btn>
    </v-card-actions>
  </v-card>
  </v-list>
</div>
</template>
<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      dialog: false,
      likeCounter: 0,
      songs: [ ]
    }
  },
  props: [
    'search'
  ],
  methods: {
    like () {
      this.likeCounter++
    },
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  computed: {
    filtredSong () {
      console.log(this.search)
      return this.Songs.filter((song) => {
        return song.title.match(this.search)
      })
    }
  },
  async mounted () {
    // do a request to the database
    this.songs = (await SongsService.getSongs()).data
  }
  // methods: {
  //   click () {
  //     this.likeCounter++
  //     console.log('inside like method')
  //   }
  // }
}
</script>
<style scoped>

</style>
