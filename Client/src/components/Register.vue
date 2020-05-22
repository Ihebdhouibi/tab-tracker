<template>
  <div>
    <h1>Register</h1>
    <input  type="email"
            value="email"
            placeholder="email"
            v-model="email"
    />
    <br><br>
    <input  type="password"
            value="password"
            placeholder="password"
            v-model="password"
    />
    <br><br>
    <button @click="register">Register </button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {

  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
