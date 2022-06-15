<template>
  <div>
    <div class="">
      <NuxtLink to="/">Index</NuxtLink> |
      <NuxtLink to="/home">Home</NuxtLink> |
      <NuxtLink to="/news">News</NuxtLink> |
      <NuxtLink to="/about">About</NuxtLink> |
      <NuxtLink to="/contact">Contact</NuxtLink>
    </div>

    <slot />

    <div class="">
      <NuxtLink to="/about">About</NuxtLink> |
      <NuxtLink to="/contact">Contact</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayouts',
  components: {
  }
}
</script>

<script setup>
import {} from 'vue'
</script>

<style scoped></style>