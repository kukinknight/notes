<template>
  <div id="app">
  <h2>请输入您的姓名和年龄</h2>
  <form action="">
    <input type="text" v-model="name">  <br>
    <input type="text" v-model="age">
  </form>
  <button @click="requestByGet">GET</button>
  <button @click="requestByPost">POST</button>
  <button @click="requestByPostJson">POSTJson</button>
  <p>{{ msg }}</p>
  </div>
</template>

<script>
import Axios  from 'axios'
import axios from 'axios';
axios.defaults.baseURL = 'http://demo-api.geekfun.website';
export default {
  name:'APP',
  components: {

  },
  data() {
    return {
     msg:'',
     name:'',
     age:''
    };
  },
  computed: {

  },
  created() {

  },
  methods: {

 requestByGet(){
 Axios.get(
  '/vue/01/01.aspx',
  {
    params:{
      name:this.name,
      age:this.age
    }
  }
 )
 .then((response) => this.msg = response.data)
 },

 requestByPost(){
   let data = new FormData();
   data.append('name',this.name);
   data.append('age',this.age)
   Axios.post(
    '/vue/get-vs-post.aspx',
    data
   )
   .then((response) => this.msg = response.data)
 },
 requestByPostJson(){
 Axios.post(
  '/vue/get-vs-post.aspx',
  {
    name:this.name,
    age:this.age
  }
 )
 .then((response) => this.msg = response.data)
 }
  }
};
</script>

<style scoped lang="less">

</style>
