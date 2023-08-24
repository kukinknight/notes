<template>
  <!-- ---（7）————鼠标进入，调用mouseHandler(true)方法 -->
  <li
    :class="{ completed: todo.completed }"
    @mouseenter="mouseHandler(true)"
    @mouseleave="mouseHandler(false)"
  >
    <input type="checkbox" v-model="isCom" />
    <label>{{ todo.title }}</label>
    <!-- ——————（8）————isShow控制删除按钮“X”的隐藏和展示 -->
    <!-- ————（9）————给删除按钮绑定点击事件 -->
    <button @click="removeTodo(todo)" v-show="isShow">X</button>
  </li>
</template>

<script>
import { reactive, toRefs, computed } from 'vue'
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  emits: ['remove-todo', 'update-todo'],
  setup(props, { emit }) {
    const state = reactive({
      isShow: false
    })
    function removeTodo(todo) {
      emit('remove-todo', todo)
    }

    function mouseHandler(flag) {
      state.isShow = flag
    }

    const isCom = computed({
      get() {
        return props.todo.completed
      },
      set(val) {
        emit('update-todo', { ...props.todo, completed: val })
      }
    })
    return {
      ...toRefs(state) //——(10)————将响应式对象state转换为普通对象并解构
    }
  }
}
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
  text-align: left;
}

li label li input {
  text-align: left;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
