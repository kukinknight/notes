<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const params = ref({})

const route = useRoute()
watch(route, (to) => {
  params.value = to.params
})
onMounted(() => {
  params.value = route.params
})
</script>
<template>
  <section>
    <div class="container">
      <p class="description">这是“产品”页面</p>
      <div>
        <router-link to="/MyProduct/1">1号产品</router-link>
      </div>
      <div>
        <router-link to="/MyProduct/2">2号产品</router-link>
      </div>
      <div>
        标签为{{ route.params.tag }}，第 {{ route.params.page }} 页，
        <router-link to="/MyProduct/2/3">下一页</router-link>
      </div>
    </div>
  </section>
</template>
<style  scoped>
.container div {
  text-align: center;
  line-height: 1.5;
  margin-top: 10px;
  font-size: 28px;
}
</style>
