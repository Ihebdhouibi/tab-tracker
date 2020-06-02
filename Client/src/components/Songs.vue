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
        <div class="overline mb-4">{{song.title}}</div>
        <v-list-item-title class="headline mb-1">{{song.artist}}</v-list-item-title>
        <v-list-item-subtitle>{{song.genre}} {{song.album}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
      <!-- to make song id so that each song got its own likeCounter -->
      <v-btn @click="like" retain-focus-on-click light depressed color="white">
      <v-icon left small>mdi-thumb-up-outline</v-icon> Like {{likeCounter}}
    </v-btn>
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
      likeCounter: 0,
      songs: [ ]
    }
  },
  methods: {
    like () {
      this.likeCounter++
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
