<template>
  <div class="">
    <h3>Admin</h3>

    <ul v-for="(item,index) in dataList">
      <li>id: {{ item.id }}</li>
      <li>title: {{ item.title }}</li>
      <li>typeName: {{ item.typeName }}</li>
      <li>isTop: {{ item.isTop }}</li>
      <li>view_count: {{ item.view_count }}</li>
      <li>addTime: {{ item.addTime }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AdminPage'
}
</script>

<script setup>
import { ref } from 'vue'

definePageMeta({
  middleware: ['admin'],
});

let dataList = ref([])

//1
// const res = await useAsyncData("getList", () =>
//   $fetch("http://121.36.81.61:8000/getTenArticleList")
// );

//2
const res = await useFetch("http://121.36.81.61:8000/getTenArticleList", {
  method: 'get',
  id: 1
})

//console.log(res.data.value.data)
dataList.value = res.data.value.data


</script>

<style scoped></style>