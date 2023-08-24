<template>
  <div>
<h1>App根组件</h1>
<todo-list></todo-list>
  </div>
</template>

<script>
export default {
  name:'MyApp',
  props: {

  },
  components: {

  },
  data() {
    return {
      //任务列表数据
     todolist:[
      {id:1,task:'周一早晨九点开会',done:false},
      {id:2,task:'周一晚上八点聚餐',done:false},
      {id:3,task:'准备周三上午的演讲稿',done:true}
     ]
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

</style>
