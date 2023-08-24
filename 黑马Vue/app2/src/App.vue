<template>
  <div>
    <div class="input">姓名:<input type="text" v-model="name" /></div>
    <div class="input">年龄:<input type="text" v-model="age" /></div>
    <div class="input">性别:<input type="text" v-model="sex" /></div>
    <div class="input"><button @click.prevent="add">添加</button></div>
    <table cellspacing="0">
      <thead>
        <tr>
          <td>id</td>
          <td>姓名</td>
          <td>年龄</td>
          <td>性别</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.sex }}</td>
          <td @click.prevent="del(item.id)"><a href="#">删除</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      list: [
        { id: 1, name: '张三', age: 19, sex: '男' },
        { id: 2, name: '李四', age: 30, sex: '男' },
        { id: 3, name: '王五', age: 22, sex: '女' }
      ],
      name: '',
      age: '',
      sex: ''
    }
  },
  computed: {},
  created() {},
  methods: {
    add() {
      this.list.push({ id: +new Date(), name: this.name, age: this.age, sex: this.sex })
      this.name = this.age = this.sex = ''
    },
    del(id) {
      this.list = this.list.filter(item => {
        return item.id !== id
      })
    }
  }
}
</script>

<style scoped>
.p {
  margin: 0 au;
}
.input {
  display: inline-block;
}
.input input {
  background-color: #fff;
  color: aqua;
  width: 50px;
}
table {
  border: 1px solid black;
  margin: auto;
}
tr,
td {
  border: 1px solid black;
  width: 100px;
  text-align: center;
}
a {
  color: black;
}
</style>
