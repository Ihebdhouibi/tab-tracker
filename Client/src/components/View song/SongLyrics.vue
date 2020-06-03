<template>
        <v-flex xs-6>
    <div class="text-left pl-12">
      <h3>Song lyrics: </h3>
      <textarea
        cols="70"
        rows="10"
        readonly
        v-model="song.lyrics"
      />
      </div>
      </v-flex>
</template>
<script>
export default {
  props: [
    'song'
  ]
}
</script>
