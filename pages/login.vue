<template>
  <div class="login-page login__container">
    <h2>Login</h2>
    <Notification :message="error" v-if="error" />
    <form class="login__form" method="post" @submit.prevent="login">
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" v-model="email" required />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        minLength="{8}"
        v-model="password"
        required
      />
      <button class="loginBtn">SIGN IN</button>
      <p>
        Don't have an account?
        <span class="link">
          <nuxt-link to="/register"> Sign up </nuxt-link>
        </span>
      </p>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "Login",
  computed: {
    users() {
      return this.$store.state.auth.users;
    },
  },
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },

  methods: {
    ...mapMutations(["setUser"]),
    ...mapGetters(["loggedInUser"]),
    async login() {
      const data = {
        email: this.email,
        password: this.password,
      };

      let result = this.users.filter(
        (user) => user.email === data.email && user.password === data.password
      )[0];

      !!result
        ? this.setUser({ ...result, loggedIn: true })
        : (this.error =
            " incorrect details, Please try again or register if you are new");
      !!result && this.$router.push("/");
    },
  },
};
</script>
<style lang="scss"></style>
