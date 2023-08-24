<template>
  <div>
  <h1>{{ goodsname }}</h1>
  <p>价格:{{ price }}</p>
  <p>{{ info }}</p>
  <button @click="kanyidao">砍一刀</button>
  </div>
</template>

<script>
export default {
name:'GoodsList',
props:[
 'goodsname',
 'price',
 'info',
 'id'
],
  components: {

  },
  data() {
    return {
     list:[
        {}
     ]
    };
  },
  computed: {

  },
  created() {

  },
  methods: {
   kanyidao(){
    this.$emit('changeprice',this.id)
   }
  },
};
</script>

<style scoped>
div{
    width: 800px;
    height: 200px;
    border: 1px solid black;
}
</style>
