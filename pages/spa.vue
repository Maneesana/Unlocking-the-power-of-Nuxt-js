<template lang="">
  <h3>SPA Page</h3>
  <p>{{ date }}</p>
</template>
<script setup lang="ts">
const date = new Date().toGMTString();
console.log("SPA Page logging");
</script>
<style lang=""></style>
