<template>
    <v-app>
        <v-content>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="8">
                        <v-card class="elevation-12">
                            <v-window v-model="step">
                                <v-window-item :value="1">
                                    <v-row>
                                        <v-col cols="12" md="8">
                                            <v-card-text class="mt-12">
                                                <h1 class="text-center display-2 teal--text text--purple--darken-1">Sign In To Musika</h1>
                                                <div class="text-center" mt-4>
                                                    <v-btn class="mx-2" fab color="black" outlined>
                                                        <v-icon>fab fa-facebook-f</v-icon>
                                                    </v-btn>
                                                    <v-btn  class="mx-2" fab color="black" outlined>
                                                        <v-icon>fab fa-twitter</v-icon>
                                                    </v-btn>
                                                </div>
                                                <h4 class="text-center" mlt-4>You can Login using social media</h4>
                                                <v-form>
                                                    <v-text-field
                                                        label="Email"
                                                        name="Email"
                                                        prepend-icon="email"
                                                        type="text"
                                                        color="purple darken-1"
                                                        v-model="email"
                                                    />
                                                    <v-text-field
                                                        id="password"
                                                        label="Password"
                                                        name="Password"
                                                        prepend-icon="lock"
                                                        type="password"
                                                        color="purple darken-1"
                                                        v-model="password"
                                                    />
                                                </v-form>
                                                <!-- forgot your password ? or error text here  -->
                                            </v-card-text>
                                            <div class="red--text"><h3>{{loginError}}</h3> </div>
                                            <div class="text-center mt-3">
                                                <v-btn rounded color="purple darken-1" dark @click="login">SIGN IN</v-btn>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" md="4" class="purple darken-1">
                                            <v-card-text class="white--text mt-12">
                                                <h1 class="text-center display-1">Hello, Friends !</h1>
                                                <br><br>
                                                <h4 class="text-center">Enter you informations and start your journey with the best of music</h4>
                                            </v-card-text>
                                            <div class="text-center">
                                                <v-btn rounded outlined="" dark @click="step++, loginError=null">SIGN UP</v-btn>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-window-item>
                                <v-window-item :value="2">
                                    <v-row class="fill-height">
                                        <v-col cols="12" md="4" class="purple darken-1">
                                            <v-card-text class="white--text mt-12">
                                                <h1 class="text-center display-1">Welcome Back !</h1>
                                                <br><br>
                                                <h4>Keep the flow gowing with Musika login with your email and password</h4>
                                            </v-card-text>
                                            <div class="text-center">
                                                <v-btn rounded outlined dark @click="step-- , registerError=null">SIGN IN</v-btn>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" md="8">
                                            <v-card-text class="mt-12">
                                                <h1 class="text--center display-2 teal--text text--purple--darken-1">Create Account</h1>
                                                <div class="text-center mt-4">
                                                     <v-btn class="mx-2" fab color="black" outlined>
                                                        <v-icon>fab fa-facebook-f</v-icon>
                                                    </v-btn>
                                                    <v-btn  class="mx-2" fab color="black" outlined>
                                                        <v-icon>fab fa-twitter</v-icon>
                                                    </v-btn>
                                                </div>
                                                <h4 class="text-center" mlt-4>You can Login using social media</h4>
                                                <v-form>
                                                    <v-text-field
                                                        label="Name"
                                                        name="Name"
                                                        prepend-icon="person"
                                                        type="text"
                                                        color="purple darken-1"
                                                        v-model="name"
                                                        required
                                                        :rules="[required]"
                                                        />
                                                    <v-text-field
                                                        label="Email"
                                                        name="Email"
                                                        prepend-icon="email"
                                                        type="text"
                                                        color="purple darken-1"
                                                        v-model="email"
                                                        />
                                                    <v-text-field
                                                        id="password"
                                                        label="Password"
                                                        name="Password"
                                                        prepend-icon="lock"
                                                        type="password"
                                                        color="purple darken-1"
                                                        v-model="password"
                                                        />
                                                </v-form>
                                            <div class="red--text"><h3>{{registerError}}</h3> </div>
                                            </v-card-text>
                                            <br>
                                            <div class="text-center mt-n5">
                                                <v-btn rounded color="team accent-3" dark @click="register">SIGN UP</v-btn>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-window-item>
                            </v-window>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data: () => ({
    step: 1,
    email: '',
    password: '',
    name: '',
    loginError: null,
    registerError: null,
    required: (value) => !!value || 'Name is required'
  }),
  props: {
    source: String
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push('/home')
        this.loginError = null
      } catch (error) {
        this.loginError = error.response.data.error
      }
    },
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
          name: this.name
        })
        // add name
        this.step--
        this.$store.dispatch('setToken', response.token)
        this.$store.dispatch('setUser', response.token)
        this.registerError = null
      } catch (error) {
        this.registerError = error.response.data.error
      }
    }
  }
}
</script>
<style scoped>

</style>
