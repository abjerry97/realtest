<template>
  <nav class="top-nav">
    <div class="container container-lg d-flex justify-content-between">
      <div><nuxt-link to="/">SHAPES</nuxt-link></div>
      <div class="logout"  @click="logout"> Logout </div>
    </div>
  </nav>
</template>
<script>
import { mapMutations  } from "vuex";
export default {
  name: "Navbar",
  methods: {
    ...mapMutations(["logoutUser"]),
     logout() {
       this.logoutUser();
   this.$router.push("/login")
    },
  },
};


</script>
<style lang="scss">
.top-nav {
  background: #fff;
  position: sticky;
  top: 0;
  padding: 1rem 0;
  box-shadow: 0 0rem 1rem rgba(0, 0, 0, 0.15);
}
.logout {
  color: #ff0000;
  cursor:pointer;
  &:hover {
    text-decoration: underline;
  }
}
</style>
