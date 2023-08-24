<template>
  <div class="login-page">
    <van-nav-bar title="面经登录" />

    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="onSubmit">登录</van-button>
      </div>
    </van-form>
    <router-link to="/register" class="link">还没有账号，去注册</router-link>
  </div>
</template>

<script>
import { loginAPI } from '@/api/user'
export default {
  name: 'login-page',
  components: {},
  data() {
    return {
      username: '',
      password: ''
    }
  },
  computed: {},
  created() {},
  methods: {
    async onSubmit(values) {
      const { data: res } = await loginAPI(values)
      this.$toast.success('登录成功')
      localStorage.setItem('mobile', res.data.token)
      this.$router.push('/article')
    }
  }
}
</script>

<style scoped>
.link {
  float: right;
  color: #069;
  font-size: 12px;
  padding-right: 20px;
}
</style>
