<template>
    <div>
         <v-flex xs-6>
       <v-list-item-content>
        <div class="headline mb-1 text-left pl-8">Song title : {{song.title}}</div>
        <v-list-item-title class="headline mb-2 text-left pl-8">Artist : {{song.artist}}</v-list-item-title>

      <v-list-item-title class="headline mb-2 text-left pl-8">Album : {{song.album}}</v-list-item-title>
      </v-list-item-content>
       <v-card-actions>
         <v-row>
      <v-btn text class="pl-12">Add to favorite<v-icon>mdi-bookmark</v-icon></v-btn>
      <v-btn text @click="navigateTo({
        name: 'song-edit',
        params: {
          songId: song.id
        }
      })">Edit Song <v-icon>content-save-edit</v-icon></v-btn>
       </v-row>
    </v-card-actions>
     </v-flex>
    </div>
</template>
<script>
export default {
  props: [
    'song'
  ],
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
<style scoped>

</style>
