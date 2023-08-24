<template>
 <li>
    <input type="checkbox">
    <span>周一早晨八点四十上课</span>
    <span class="complete noComplete">未完成</span>
    <span class="complete hasComplete">已完成</span>
    </li>
</template>

<script>
export default {
    name:'ListView',

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
};
</script>

<style scoped lang="less">
 li{
    width: 600px;
    height: 50px;
    line-height: 50px;
    list-style: none;
   border: 1px solid black;
 }
 .complete{
    font-size: 12px;
    font-weight: bold;
    padding: 3px;
    border-radius: 6px;
 }
 .noComplete{
  
 }
</style>
