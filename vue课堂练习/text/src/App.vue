<template>
  <div id="app">
  Color:
  <div class="color-picker">
    <input type="text" autocomplete="off" v-model="color" @keyup="find">
    <div class="popup" :class="list.length >0? 'show':''">
    <div class="color-item" v-for="color in list" :key="color" @click="onClick(color)">
      {{ color }}
    </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
    color:'',
    list:[]
    };
  },
  computed: {

  },
  created() {

  },
  methods: {
    onClick(){
    this.color = color
    this.list = []
    },
  findColors(){
    if(this.color.trim())
    Axios.get(
      '/vue/get-colors.aspx',
      {params:{sColor:this.color}}
    )
    .then(response=> this.list = response.data)
    else{
      this.list = []
    }
  }
  },
};
</script>

<style scoped>
     *{
      box-sizing: border-box;
     }
     .color-picker{
      position: relative;
      display: inline-block;
     }
     .color-picker input{
      width: 200px;
      font-size: 16px;
     }
     .popup{
      position: absolute;
      width: 200px;
      cursor: pointer;
     }
     .popup show{
      border: 1px solid #666;
     }
     .color-item:hover{
      background-color: #ccc;
     }
     .color-item{
      padding: 2px;
     }
</style>
