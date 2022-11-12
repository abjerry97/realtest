<template>
  <div class="notification is-danger">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: ['message'],
};
</script>
<style lang="scss">
  .notification {
    margin : 1rem 0;
    font-size:14px;
    color:#ff0000;
}
.logout {
  color: #ff0000;
}
</style>
