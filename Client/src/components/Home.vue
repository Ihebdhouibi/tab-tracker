<template>
  <v-app id="inspire" v-if="$store.state.isUserLoggedIn">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      :mini-variant.sync="drawer"
      permanent
      dark
    >
     <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

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
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <v-btn text to="Register">Tab Tracker</v-btn>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn
        icon
        large
      >
        <v-avatar
          size="32px"
          item
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          ></v-img></v-avatar>
      </v-btn>
    </v-app-bar>
    <AddPub />
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AddPub from '@/components/AddNewPubButton'
export default {
  components: {
    AddPub
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    items: [
      { icon: 'mdi-history', text: 'Frequently searched' },
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
        name: 'Login'
      })
    }
  }
}
</script>
