<template>
  <div>
    <p>科目 <input type="text" v-model="subject" /></p>
    <p>分数 <input type="text" v-model="soce" /></p>
    <a href="#" @click="add">添加</a>
    <p>总分:{{ toatal }}</p>
    <p>平均分:{{ avg }}</p>
    <table>
      <thead>
        <tr>
          <td>编号</td>
          <td>科目</td>
          <td>成绩</td>
          <td>考试时间</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in List" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.subject }}</td>
          <td v-if="item.soce >= 60">{{ item.soce }}</td>
          <td class="red" v-else>{{ item.soce }}</td>
          <td>{{ item.data }}</td>
          <td @click.prevent="del(item.id)"><a href="#">删除</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      List: [
        { id: 15, subject: '语文', soce: 89, data: new Date('2022/1/25 10:00:00') },
        { id: 27, subject: '数学', soce: 100, data: new Date('2022/1/25 10:00:00') },
        { id: 32, subject: '英语', soce: 56, data: new Date('2022/1/25 10:00:00') },
        { id: 41, subject: '物理', soce: 76, data: new Date('2022/1/25 10:00:00') }
      ],
      subject: '',
      soce: ''
    }
  },
  computed: {
    toatal() {
      return this.List.reduce((t, c) => t + c.soce, 0)
    },
    avg() {
      return (this.toatal / this.List.length).toFixed(2)
    }
  },
  created() {},
  methods: {
    del(id) {
      this.List = this.List.filter(item => {
        return item.id !== id
      })
    },
    add() {
      this.List.push({
        id: +new Date(),
        subject: this.subject,
        soce: this.soce,
        data: new Date('2022/1/25 10:00:00')
      }),
        (this.subject = this.soce = '')
    }
  }
}
</script>

<style scoped>
table {
  margin: auto;
}
.red {
  color: red;
}
</style>
