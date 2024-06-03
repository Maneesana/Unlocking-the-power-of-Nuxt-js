<template lang="">
  <div>
    <p v-if="pending">Loading posts ....</p>

    <p v-else-if="error">{{ error }}</p>
    <p v-else></p>
    <ul>
      <pre>{{ data }}</pre>
    </ul>
  </div>
</template>
<script setup lang="ts">
const { data, pending, error } = useFetch(
  "https://jsonplaceholder.typicode.com/posts"
);
</script>
<style lang=""></style>
