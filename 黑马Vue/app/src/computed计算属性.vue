<template>
  <div>
   <input type="text" v-model="xing">
   <input type="text" v-model="ming">
   <input type="text" v-model="fullName">
  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
    xing:'张',
    ming:'三',
    
    };
  },
  computed: {
  fullName:{
   get(){
    return  this.xing + ' ' +this.ming
   },
   set(value){
    let arr = value.split(' ')
    this.xing = arr[0]
    this.ming = arr[1]
   }
  }
  },
  created() {

  },
  methods: {

  },
};
</script>

<style scoped lang="less">

</style>
