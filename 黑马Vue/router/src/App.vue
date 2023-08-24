<template>
  <div>
    <router-link to="/home" class="app">首页</router-link>
    <router-link to="/movie" class="app">电影</router-link>
    <router-link to="/about" class="app">关于</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {}
  },
  computed: {},
  created() {},
  methods: {}
}
</script>

<style scoped>
.app {
  margin: 0 100px;
  color: gray;
  text-decoration: none;
}
</style>
