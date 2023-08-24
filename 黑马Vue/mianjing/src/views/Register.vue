<template>
  <div class="login-page">
    <van-nav-bar title="面经注册" />

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
        <van-button block type="primary" native-type="onSubmit">注册</van-button>
      </div>
    </van-form>
    <router-link to="/login" class="link">已有账号，去登陆</router-link>
  </div>
</template>

<script>
import { registerAPI } from '@/api/user'
export default {
  name: 'register-page',
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
      await registerAPI(values)
      this.$toast.success('注册成功')
      this.$router.push('/login')
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
