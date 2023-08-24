<template>
  <div>
    <h1>用户管理</h1>
    <button @click="this.add = 0">切换添加模式</button>

    <table>
      <tr>
        <th>用户名</th>
        <th>年龄</th>
        <th>毕业学校</th>
        <th>备注</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item,index) of stu" :key="index">
        <td>{{item.name}}</td>
        <td>{{item.age }}</td>
        <td>{{ item.shcool }}</td>
        <td>{{ item.remark }}</td>
        <td><a href="#" @click="compile(index)">编辑</a><a href="#" @click="del(index)">删除</a></td>
      </tr>
      <tr>
        <td><input type="text" v-model="addname"></td>
        <td><input type="text" v-model="addage"></td>
        <td>
          <select @change="getvaluemethod($event)">
            <option v-for="(item,index) of addshcool" :key="index">{{item.shcool }}</option>
          </select>
        </td>
        <td><input type="text" v-model="addremark"></td>
        <td>
          <button @click="add1" v-if="add == 0">保存</button>
          <button @click="add2" v-else-if=" add == 1">保存</button>
        </td>
      </tr>
      <tr>
        <td v-if="add == 0">现在是添加模式</td>
        <td v-if="add == 1">现在是编辑模式</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stu:[
        {name:'小明',age:18,shcool:'光明小学',remark:'三好学生'},
        {name:'小刚',age:20,shcool:'复兴中学',remark:'优秀学生'},
        {name:'李雷',age:19,shcool:'光明小学',remark:'小顽皮'},
      ],
      shcool:'光明小学',
      addname:'',
      addage: '',
      add:0,
      addcompile:'',
      addremark:'',
      addshcool:[
        {id:1,shcool:'光明小学'},
        {id:2,shcool:'复兴中学'}
      ]
    }
  },
  methods:{
    add1(){
      let age = this.addage
      let name = this.addname
      let shcool = this.shcool
      let remark = this.addremark
      this.stu.push({name:name,age:age,shcool:shcool,remark:remark,})
    },
    add2(){
      console.log(2);
      let age = this.addage
      let name = this.addname
      let shcool = this.shcool
      let remark = this.addremark
      let sun = this.addcompile

      this.stu.splice(sun,1,{name:name,age:age,shcool:shcool,remark:remark,})
    },
    getvaluemethod(event) {
					//获取当前选中的值，并重新赋值
					this.shcool = event.target.value;
		},
    del(e){
        this.stu.splice(e,1)
    },
    compile(e){
      this.add = 1
      this.addcompile = e
    }

  }
}
</script>

<style>

</style>