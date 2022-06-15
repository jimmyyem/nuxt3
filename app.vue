<template>
  <NuxtLayout name="default">
    <div>
      <hello-world />
      <NuxtPage></NuxtPage>
    </div>
  </NuxtLayout>
</template>


<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<script setup>
import {} from 'vue'
</script>

<style>
@import 'element-plus/dist/index.css';
</style>