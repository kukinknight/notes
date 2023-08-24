<template>
  <!-- （1）数据双向绑定 -->
  <!-- （2）——绑定键盘“回车键”抬起事件，添加新的待完成事项 -->
  <TodoHeader
    v-model:todo-title.sync="newTodo"
    keyup.enter="addTodo"
    autofocus
    placeholder="新增今日待办"
    autocomplete="off"
  ></TodoHeader>
  <ul>
    <!-- （3）——遍历filteredTodos，展示列表 -->
    <ListItem
      v-for="todo in filteredTodos"
      :key="todo.id"
      :todo="todo"
      @remove-todo="removeTodo"
      @update-todo="updateTodo"
    ></ListItem>
  </ul>
  <TodoFooter :items="filterItems" v-model="visibility"></TodoFooter>
</template>

<script>
import { reactive, toRefs, computed, watchEffect } from 'vue'
import TodoHeader from './components/Header.vue'
import ListItem from './components/ListItem.vue'
import TodoFooter from './components/Footer.vue'

const filters = {
  all(todos) {
    return todos
  },
  active(todos) {
    return todos.filter(todo => !todo.completed)
  },
  completed(todos) {
    return todos.filter(todo => todo.completed)
  }
}

//缓存数据
const todoStorage = {
  fetch() {
    let todos = JSON.parse(localStorage.getItem('vue3-todos') || '[]')
    todos.forEach((todo, index) => {
      todo.id = index + 1
    })
    return todos
  },
  save(todos) {
    localStorage.setItem('vue3-todos', JSON.stringify(todos))
  }
}
export default {
  components: {
    TodoHeader,
    ListItem,
    TodoFooter
  },
  setup() {
    const state = reactive({
      newTodo: '',
      todos: todoStorage.fetch(),
      filterItems: [
        {
          label: 'All',
          value: 'all'
        },
        {
          label: 'Active',
          value: 'active'
        },
        {
          label: 'Completed',
          value: 'completed'
        }
      ],
      visibility: 'all',
      filteredTodos: computed(() => {
        //————（4）——————定义计算属性
        return filters[state.visibility](state.todos)
      })
    })

    function addTodo() {
      state.todos.push({
        id: state.todos.length + 1,
        title: state.newTodo,
        completed: false
      })
      state.newTodo = ''
    }

    function removeTodo(todo) {
      state.todos.splice(state.todos.indexOf(todo), 1)
    }

    function updateTodo(todo) {
      state.todos = state.todos.map(item => {
        if (item.id == todo.id) {
          item.completed = todo.completed
        }
        return item
      })
    }
    watchEffect(() => {
      todoStorage.save(state.todos)
    })
    return {
      ...toRefs(state),
      addTodo,
      removeTodo,
      updateTodo
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.completed {
  text-decoration: underline;
}

ul {
  left: 50%;
  width: 560px;
  margin-left: -280px;
  position: relative;
  padding: 0;
}
</style>
