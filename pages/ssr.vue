<template>
  <h3>SRR Page</h3>
  <p>{{ date }}</p>
</template>
<script setup lang="ts">
const date = new Date().toGMTString();
console.log("SSR Page logging");
</script>
<style lang=""></style>
