<template>
<div class="mx-auto"
    fluid>
    <v-list v-for="song in songs" :key="song.title">
   <v-card
    outlined
    width="1000px"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">{{song.title}}</div>
        <v-list-item-title class="headline mb-1">{{song.author}}</v-list-item-title>
        <v-list-item-subtitle>{{song.description}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
      <v-btn text>Button</v-btn>
      <v-btn text>Button</v-btn>
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
      songs: [
        // {title: 'a', author: 'a', description: 'aaa'},
        // {title: 'b', author: 'b', description: 'bbb'},
        // {title: 'c', author: 'c', description: 'ccc'},
        // {title: 'd', author: 'd', description: 'ddd'}
      ]
    }
  },
  async mounted () {
    // do a request to the database
    this.songs = await SongsService.getSongs()
  }
}
</script>
<style scoped>

</style>
