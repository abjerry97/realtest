<template>
  <li >
    {{shape}}
  </li>
</template>
<script>
import { mapMutations  } from "vuex";
export default {
  name: "ShapeBox",
  props: ['shape'],
  methods: {
    ...mapMutations(["logoutUser"]),
     logout() {
       this.logoutUser();
   this.$router.push("/login")
    },
  },
};


</script>
