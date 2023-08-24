<template>
 <header>
    <div>任务</div>
    <input type="checkbox" placeholder="请填写任务信息">
    <button @click="add"></button>
 </header>
</template>

<script>
 export default {
    name:HeaderView,
    emits:['Listadd'],
  props: {

  },
  components: {

  },
  data() {
    return {
    text:''
    };
  },
  computed: {

  },
  methods: {
  add(){
   this.$emit('addList',this.text)
  },
  },
};
</script>

<style scoped lang="less">

</style>
