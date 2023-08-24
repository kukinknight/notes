<template>
   <div class="box">
  <h3>购物车</h3>
  <table cellspacing="0">
    <thead>
      <tr>
        <!-- <th>商品信息</th>
        <th>商品金额</th>
        <th>商品数量</th>
        <th></th>
        <th></th> -->
        <th v-for="item in titleList" :key="item" >{{item}}</th>
      </tr>
    </thead>
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
     //创建一个数组用来存放表格头部标题内容
     titleList:['商品信息','商品金额','商品数量','总金额','编辑']
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

<style scoped>
.box{
 width: 80%;
 margin: 0 auto;
 
}
.box > h3{
  text-align: center;

}
table{
  width: 100%;
  border: 1px solid gray;
}
table > tr{
  height: 40px;
  line-height: 40;
  background-color: #787474;
  color: #fff;
}
</style>
