<template>
  <div>
  <label for="all">全选</label>
  <input type="checkbox" id="all" v-model="all">

  <ul>
    <li v-for="item in arr" :key="item.name">
      <input type="checkbox" v-model="item.c">
      <span>{{ item.name }}</span>
    </li>
  </ul>
  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
    arr:[
      {name:'孙悟空',c:false},
      {name:'唐僧',c:false},
      {name:'猪八戒',c:false},
      {name:'白龙马',c:false}
    ]
    
    };
  },
  computed: {
 all:{
  get(){
    // every: 要求 item.c 都是true 最终结果才是true
  return this.arr.every(item=>item.c)
  },
  set(value){
    // console.log(value) true | false
      this.arr.forEach(item =>  item.c = value
     );
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
