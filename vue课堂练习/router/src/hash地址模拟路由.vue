<template>
  <div class="app-container">
    <a href="#/home">首页</a>&nbsp;&nbsp; <a href="#/movie">电影</a>&nbsp;&nbsp;
    <a href="#/about">关于</a>

    <component :is="comName"></component>
  </div>
</template>

<script>
// 导入组件
import MyHome from './views/MyHome.vue'
import MyMovie from './views/MyMovie.vue'
import MyAbout from './views/MyAbout.vue'
export default {
  data() {
    return {
      comName: 'MyHome'
    }
  },
  // 注册组件
  components: {
    MyHome,
    MyMovie,
    MyAbout
  },
  // 写到 created 生命周期函数中，这样，代码可以自动执行
  created() {
    // 注册window的onhashchange事件，当hash地址改变的时候，就会触发 onhashchange 事件
    // 这个事件处理函数要使用箭头函数
    window.onhashchange = () => {
      // console.log(location.hash); // #/home #/movie  #/about
      let hash = location.hash
      if (hash === '#/home') {
        this.comName = 'MyHome'
      } else if (hash === '#/movie') {
        this.comName = 'MyMovie'
      } else if (hash === '#/about') {
        this.comName = 'MyAbout'
      } else {
        this.comName = 'MyHome'
      }
    }
  }
}
</script>
