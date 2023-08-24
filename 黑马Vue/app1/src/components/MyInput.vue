<template>
  <div>
  <input type="text" :value="value" @input="add">
  </div>
</template>

<script>
export default {
    name:'MyInput',
  props: [ 'value']
  ,
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
add(e){
    this.$emit('changeGet',e.target.value)
}
  },
};
</script>

<style scoped lang="less">

</style>
