<template>
  <v-app>
    <v-layout>
      <v-flex xs6 offset-xs3>
        <div class="white elevation-1">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>
              Register
            </v-toolbar-title>
          </v-toolbar>
          <div class="pl-4 pr-4 pt-4 pb-2">
            <v-form>
              <v-container>
                <v-row>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field
                      label="Email"
                      outlined
                      class="email"
                      v-model="email"
                      v-on:keyup.enter="register"
                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4" md="3">
                    <v-text-field
                      label="Password"
                      outlined
                      type="password"
                      v-model="password"
                      v-on:keyup.enter="register"
                    ></v-text-field>
                    </v-col>
                    </v-row>
                    <v-row>
                      <div class="red--text">{{error}} </div>
                    </v-row>
                    <v-row>
                      <v-btn  @click="register">Register </v-btn>
                    </v-row>
                  </v-container>
              </v-form>
        </div>
        </div>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.token)
        this.$store.dispatch('setUser', response.token)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
