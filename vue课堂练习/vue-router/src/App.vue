<template>
  <div>
    <h1>
      <router-link to="/home">首页</router-link>&nbsp;
      <router-link to="/movie" >志愿项目</router-link>&nbsp;
      <router-link to="/about">政策</router-link>
    </h1>

<router-view></router-view>
  </div>
</template>

<script>
export default {
  props: {

  },
  components: {

  },
  data() {
    return {

    };
  },
  computed: {

  },
  created() {

  },
  methods: {

  },
};
</script>

<style scoped>
h1{
  margin: 0 20px;
  font-size: 22px;
  
}
</style>
