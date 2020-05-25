<template>
  <v-form>
      <v-container>
        <v-row>

               <v-col cols="12" sm="6" md="3">
                  <v-text-field
                    label="Email"
                     outlined
                     class="email"
                     v-model="email"
                  ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4" md="3">
                  <v-text-field
                    label="Password"
                    outlined
                    v-model="password"
                  ></v-text-field>
                  </v-col>
                  </v-row>
                  <v-row>
                    <div class="error" v-html="error"/>
                  </v-row>
                  <v-row>
                    <v-btn @click="register">Register </v-btn>
                  </v-row>
      </v-container>
  </v-form>
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
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color:red
}

</style>
