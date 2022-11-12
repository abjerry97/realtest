<template>
  <div class="signup__container">
    <h2>Sign up</h2>
    <form class="signup__form" method="post" @submit.prevent="register">
      <label htmlFor="email">Email Address</label>
      <input type="email" name="email" id="email" v-model="email" required />
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        v-model="username"
        required
      />
      <label htmlFor="tel">Phone Number</label>
      <input type="tel" name="tel" id="tel" required v-model="tel" />
      <label htmlFor="tel">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        minLength="{8}"
        required
        v-model="password"
      />
      <button class="signupBtn">SIGN UP</button>
      <p>
        Already have an account?
        <span class="link">
          <nuxt-link to="/login"> Login </nuxt-link>
        </span>
      </p>
    </form>
  </div>
</template>

<script>

import { mapMutations } from 'vuex';
export default {
  name: 'Register',


  data() {
    return {
      username: '',
      tel: '',
      email: '',
      password: '',
      error: null,
    };
  },

  methods: {
    ...mapMutations(['registerUser']),
    async register() {

      const data = {
      username: this.username,
      tel:this.tel,
      email: this.email,
      password: this.password,
      }


      this.registerUser(data)
      this.$router.push('/login');
    },
  },
};
</script>
<style lang="scss"></style>
