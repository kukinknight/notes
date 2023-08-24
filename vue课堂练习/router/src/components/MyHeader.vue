<template>
  <header>
    <div class="container">
      <nav class="header-wrap">
        <img src="../assets/logo.png" alt="logo" />
        <ul>
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/MyProduct">产品</router-link>
          </li>
          <li>
            <router-link to="/MyArticle">文章</router-link>
          </li>
          <li>
            <router-link to="/MyContact">联系我们</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>


<style>
.router-link-exact-active {
  color: #000;
  border-bottom: 1px solid #888;
}
</style>