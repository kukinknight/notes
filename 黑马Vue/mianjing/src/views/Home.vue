<template>
  <div class="layout-page">
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item replace to="/article" icon="home-o">面经</van-tabbar-item>
      <van-tabbar-item replace to="/collect" icon="search">收藏</van-tabbar-item>
      <van-tabbar-item replace to="/like" icon="friends-o">喜欢</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layout-page',
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

<style scoped></style>
