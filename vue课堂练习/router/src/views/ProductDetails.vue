<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<template>
  <section>
    <div class="container">
      <p class="description">这是'{{ route.params.id }}'号产品页面</p>
    </div>
  </section>
</template>