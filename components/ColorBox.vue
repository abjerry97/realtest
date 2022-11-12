<template>
  <li class="colors":class="color" >

  </li>
</template>
<script>
import { mapMutations  } from "vuex";
export default {
  name: "ColorBox",
  props: ['color'],
  methods: {
    ...mapMutations(["logoutUser"]),
     logout() {
       this.logoutUser();
   this.$router.push("/login")
    },
  },
};


</script>
