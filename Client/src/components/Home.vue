<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      color="purple darken-1"
      :mini-variant.sync="drawer"
      permanent
      dark
    >
     <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title >John</v-list-item-title>

        <v-btn
          icon
          @click.stop="drawer = !drawer"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-list dense>
        <template v-for="item in items">
          <v-row
            v-if="item.heading"
            :key="item.heading"
            align="center"
          >
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col
              cols="6"
              class="text-center"
            >
            </v-col>
          </v-row>
          <v-list-item
            v-else
            :key="item.text"
            link
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title @click="logout">
                {{ item.text }} {{item.action}}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="purple darken-1"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <!-- <v-btn  depressed to="home" color="primary">Musika</v-btn> -->
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
        v-model="search"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </v-app-bar>
    <CreateSong />
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
      <Songs>
      </Songs>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import CreateSong from '@/components/CreateSong'
import Songs from '@/components/songs'
export default {
  components: {
    CreateSong,
    Songs
  },
  data: () => ({
    // name: this.$store.state.user.name || 'John',
    search: ' ',
    drawer: null,
    items: [
      { icon: 'mdi-heart-multiple', text: 'Favorite Songs' },
      { icon: 'mdi-content-copy', text: 'Duplicates' },
      { icon: 'mdi-message', text: 'Send feedback' },
      { icon: 'mdi-help-circle', text: 'Help' },
      { icon: 'mdi-account-arrow-left-outline', text: 'Logout' }
    ]
  }),
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      console.log('inside of logout function')
      this.$router.push({
        name: 'signup'
      })
    }
  }
  // watch: {
  //   search (value) {
  //     const route = {
  //       name: 'songs'
  //     }
  //     if (this.search !== '') {
  //       route.query = {
  //         search: this.search
  //       }
  //     }
  //     this.$router.push(route)
}

</script>
