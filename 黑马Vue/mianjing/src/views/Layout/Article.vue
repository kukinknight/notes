<template>
  <div class="article-page">
    <nav class="my-nav van-hairline--bottom">
      <a href="javascript:;" :class="{ active: sorter === 'weight_desc' }" @click="remmend">推荐</a>
      <a href="javascript:;" :class="{ active: sorter === null }" @click="newList">最新</a>
      <div class="logo"><img src="@/assets/logo.png" alt="" /></div>
    </nav>

    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <ArticleItem v-for="item in list" :key="item.id" :items="item"></ArticleItem>
    </van-list>
  </div>
</template>

<script>
import { articleListAPI } from '@/api/article'
export default {
  name: 'article-page',
  data() {
    return {
      current: 1, //页面码，默认获取第一页数据
      sorter: 'weight_desc',
      list: [], //用于储存需要循环展示的数\
      loading: false,
      finished: false
    }
  },
  methods: {
    async onLoad() {
      const { data: res } = await articleListAPI({
        current: this.current,
        sorter: this.sorter
      })
      this.list.push(...res.data.rows)
      this.loading = false
      this.current++

      if (this.current > res.data.pageTotal) {
        this.finished = true
      }
    },
    //点击推荐之后
    remmend() {
      this.sorter = 'weight_desc'
      this.list = []
      this.current = 1
      this.loading = true
      this.onLoad()
    },
    //点击最新之后
    newList() {
      this.sorter = null
      this.list = []
      this.current = 1
      this.loading = true
      this.onLoad()
    }
  }
}
</script>

<style scoped>
.article-page {
  margin-bottom: 50px;
  margin-top: 44px;
  .my-nav {
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    display: flex;
    align-items: center;
    > a {
      color: #999;
      font-size: 14px;
      line-height: 44px;
      margin-left: 20px;
      position: relative;
      transition: all 0.3s;
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 0;
        height: 2px;
        background: #222;
        transition: all 0.3s;
      }
      &.active {
        color: #222;
        &::after {
          width: 14px;
        }
      }
    }
    .logo {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      > img {
        width: 64px;
        height: 28px;
        display: block;
        margin-right: 10px;
      }
    }
  }
}
</style>
