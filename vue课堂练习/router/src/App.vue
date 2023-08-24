<template>
  <div class="container">
    <MyHeader />
    <router-view />
    <MyFooter />
  </div>
</template>

<script setup>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'

</script>
