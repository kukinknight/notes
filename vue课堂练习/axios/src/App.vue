<template>
  <div>
  <button @click="startRequest">测试异步通讯(异常处理)</button>
  <br>
  <br>
  {{ message }}
  <div class="error" v-show="error.show">
    {{ error.info }}
  </div>
  </div>
</template>

<script>
import {ref,reactive,onMounted} from 'vue'
import Axios from 'axios'
Axios.defaults.baseURL = 'http://demo-api.geekfun.website'
export default {
name:'App',
setup(){
    let message = ref('')
    let error = reactive({
      show:false,
      info:''
    })
    const axios = Axios.create({
      timeout:3000,
      baseURL:'http://demo-api.geekfun.website'
    })
    onMounted(()=>{
      axios.interceptors.request.use(
        config=>config,
        error=>{
          showError('请求异常')
          return Promise.reject(error)
        }
      )
      axios.interceptors.response.use(
        response=>response,
        error=>{
          showError('响应异常' +error.message)
          return Promise.reject(error)
        }
      )
    })
    function startRequest(){
      axios.get(
        '9'
      ).then(response=>message.value = response.data)
    }
    function showError(info){
      error.info = info
      error.show = true
      setTimeout(()=>{
        error.show = false
      },2500)
    }
    return {
      message,
      error,
      startRequest
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
