<template>
  <div>

  </div>
</template>

<script>
export default {
    name:'StateView',
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
  state:()=>{
    return{
        c:100,
        fo:'湖北生态',
        arr:[1,2,3]
    }
  },

  getters:{
    count(){
        console.log('count(state)被调用')
        return this.c + 10
    }
  },
  actions:{
    changeState(num){
        this.$patch((state) => {
            state.c+=num
            state.fo = 'hello'
            state.arr.push(4)
        })
    }
  }
};
</script>

<style scoped lang="less">

</style>
