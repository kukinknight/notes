<template>
  <div class="box">
  <h3>购物车</h3>
  <table>
    <thead>
      <tr>
        <!-- <th>商品信息</th>
        <th>商品金额</th>
        <th>商品数量</th>
        <th></th>
        <th></th> -->
        <th v-for-key="item in titleList" >{{item}}</th>
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

<style scoped >
.header{
  width: 80%;
  margin: 0 auto;
  border: 1px solid #dfdfdf;
  background-color: #f7f7f7;
}
.header >.box{
  font-size: 13px;
  padding: 20px 20px 3px;
  display: flex;
}

</style>
