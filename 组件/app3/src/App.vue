<template>
  <div>
  <table border="1px" >
   <thead>
   <tr class="lie1">&nbsp;&nbsp;&nbsp;&nbsp; 任务列表</tr>
   </thead>
   <tbody>
    <tr v-for="item in mission1" checkbox="checked">&nbsp;&nbsp;&nbsp;&nbsp;{{item.mission}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="btn" v-model="btn1">已完成</button></tr>
   </tbody>
  </table>
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
   mission1:[
    {mission:'学习vue',compplete:true},
    {mission:'学习java',compplete:false},
    {mission:'学习html',compplete:false}
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

<style >
 table{
  width: 400px;
  height: 150px;
 }
 tr{
  line-height: 50px;
  width: 400px;
  height:50px;
 }
 .lie1{
  background-color: blue;
  line-height: 50px;
 font-size: 25ppx;
 color: white;
 font-weight: 700;

 }
.btn{
  background-color: blue;
}
</style>
