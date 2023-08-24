<template>
  <div>

{{ count }}
  </div>
</template>

<script>

export default {
 name:'MyCount',
  props: {
  count:{
    type:Number,
    required:true
  }
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

</style>
