<template>
  <div>
    <Navbar />
    <Home />
  </div>
</template>

<script>
import auth from "./../middleware/auth";
import { mapMutations, mapGetters } from "vuex";
export default {
  middleware: auth,
  name: "IndexPage"
};
</script>
