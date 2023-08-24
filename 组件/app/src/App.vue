<template>
  <div class="box">
    <header-view></header-view>
    <ul>
      <list-view v-for="item in indataList"
                    :key="item"
                    :msg="item.vaue"
                    :flag="item.isComplete">

      </list-view>
    </ul>
  </div>

</template>

<script>
import HeaderView from "./components/HeaderView.vue";
import ListViewfrom from "./components/ListView.vue";
export default {
  props: {

  },
  components:{

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
    ul{
      padding: 0;
      margin: 0;
    }
</style>
