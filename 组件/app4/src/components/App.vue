<template>
  <div class="app-container">
  <h1>App根组件</h1>
  <hr>
  <my-heeader title="黑马程序员" bgcolor="#000" color="#fff"></my-heeader>
  </div>
</template>

<script>

import MyHeeader from './01.MyHeader/MyHeeader.vue';
export default {
    name:'MyApp',

  props: {

  },
  components: {
  MyHeeader,
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

<style scoped >
.app-container{
    margin-top: 45px;
}
</style>
