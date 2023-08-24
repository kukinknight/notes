<template>
  <div>
    <div class="showPart" v-if="isShow">
        <div class="part">
          <h2>新增|修改</h2>
          <table  border="1px" cellpadding="1" cellspacing="0">
            <tr>
              <td>用户名:</td>
              <td><input type="text" v-model="addname"></td>
            </tr>
            <tr>
              <td>邮箱</td>
              <td><input type="text" v-model="addmail"></td>
            </tr>
            <tr>
              <td>性别</td>
              <td><input type="radio" name="sex" value="男" checked @click="sex='男'">男<input type="radio" name="sex" value="女" @click="sex='女'">女<input type="radio" name="sex" value="未知" @click="sex = '未知'">未知</td>
            </tr>
            <tr>
              <td>省份</td>
              <td>
                <select>
                  <option v-for="(item,index) of addsite" :key="index">{{ item.site }}</option>
                </select>
              </td>
            </tr> 
          </table>
          <button @click="isShow = false">取消</button><button @click="add1">保持</button>
        </div>
    </div>
    <button @click="isShow = true">点击出现弹窗</button>
    <h1>个人信息</h1>
    <table border="1px" cellpadding="1" cellspacing="0">
      <tr>
        <th style="width:200px;">用户名</th>
        <th style="width:100px;">邮箱</th>
        <th style="width:200px;">性别</th>
        <th style="width:100px;">省份</th>
        <th style="width:150px;">操作</th>
      </tr>
      <tr v-for="(item,index) of stu" :key="index">
        <td>{{item.name}}</td>
        <td>{{item.mail }}</td>
        <td>{{ item.sex}}</td>
        <td>{{ item.site }}</td>
        <td><a href="#" @click="compile(index)">编辑</a><a href="#" @click="del(index)">删除</a></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stu:[
        {name:'aaaaa',mail:'123@qq.com',sex:'女',site:'湖北'},
        {name:'bbbbb',mail:'1546@qq.com',sex:'男',site:'北京'}
      ],
      site:'湖北',
      isShow:false,
      sex:'男',
      addname:'',
      addmail:'',
      addsite:[
        {id:1,site:'湖北'},
        {id:2,site:'北京'},
      ]
    }
  },
  methods:{
    add1(){
      this.isShow = false
      let sex = this.sex
      let name = this.addname
      let mail = this.addmail
      let site = this.site
      this.stu.push({name:name,sex:sex,mail:mail,site:site,})
      this.addname = ''
      this.addmail = ''
    },
    getvaluemethod(event) {
					//获取当前选中的值，并重新赋值
					this.site = event.target.value;
		},
    del(e){
        this.stu.splice(e,1)
    },
  }
}
</script>

<style>
.showPart {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.part {
  width: 500px;
  height: 500px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>