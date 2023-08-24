<template>
  <div>
 <!-- <my-input :value="list" @changeGet="changes"></my-input> -->
 <my-input v-model="list"></my-input>
  </div>
</template>

<script>

import MyInput from './components/MyInput.vue'

export default {
 name:'App',
  components: {
   MyInput
  },
  data() {
    return {
    list:'啦啦啦'
    };
  },
  computed: {

  },
  created() {

  },
  methods: {
  changes(val){
    this.list =  val
  }
  },
};
</script>

<style scoped lang="less">

</style>
