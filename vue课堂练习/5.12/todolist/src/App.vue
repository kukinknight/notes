<template>
  <div>
    <!-- 固定在顶部 -->
    <div class="fixed-top">
      <div class="container">
        <!-- 添加待办事项 -->
        <form class="input-form" @submit.prevent="addTask">
          <label class="form-label" for="content">Todo</label>
          <input type="text" ref="content" />
          <button type="submit" class="btn-regular">Add</button>
        </form>
        <!-- 筛选项 -->
        <div class="status-boxes">
          <label v-for="item in options" :key="item.value">
            <input type="checkbox" :value="item.value" v-model="filterOption" />
            <span class="status-name">{{ item.name }}</span>
            <span :class="['badge', 'badge-' + item.color]">{{ todoCounts(item.value) }}</span>
          </label>
        </div>
      </div>
    </div>
    <!-- 任务列表 -->
    <div class="container">
      <!-- 任务列表 -->
      <div class="main-content">
        <div class="list-group">
          <todo-item
            v-for="(item, index) in filteredTodos"
            :key="item.id"
            :todo="item"
            @edit="editTask(item.id)"
            @dragstart="onDragStart($event, index)"
            @dragover.prevent="onDragOver(index)"
            @dragend="onDragEnd"
            draggable="true"
          ></todo-item>
        </div>
      </div>
    </div>
    <!-- 弹框 -->
    <modal-dialog v-if="isEditing" :todo="editingItem" @close="closeModal" />
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'
import ModalDialog from './components/ModalDialog.vue'
// getCurrentInstance找实例的this
import { ref, getCurrentInstance, reactive, computed } from 'vue'
import { useStore } from 'vuex'

import { TaskState } from './assets/Todo.js'

import VueDragDrop from 'vue-drag-drop'

export default {
  name: 'App',
  components: {
    TodoItem,
    ModalDialog,
    VueDragDrop
  },
  setup() {
    let isEditing = ref(false)

    // 该方法可以获取到实例this，但只在生命周期中有效，方法中无效
    const internalInstance = getCurrentInstance()
    // 使用store
    const store = useStore()
    // 添加待办事项数据
    function addTask() {
      let content = internalInstance.ctx.$refs.content
      console.log(content.value)
      // 值为空字符串
      if (!content.value.trim().length) return
      // 提交mutation
      store.commit('addTask', content.value)
      // 添加完之后，清空输入框的数据
      content.value = ''
    }

    // 默认选中Todo和InProgress
    let filterOption = ref([TaskState[0].value, TaskState[1].value])
    // 任务状态数据
    const options = reactive(TaskState)
    // 定义编辑项
    let editingItem = ref(null)

    //拖拽排序
    // 旧index
    let oldIndex = ref(null)
    // 新index
    let newIndex = ref(null)

    function onDragStart(event, index) {
      console.log(event)
      oldIndex.value = index
    }

    function onDragOver(index) {
      newIndex.value = index
    }

    function onDragEnd() {
      // 拖拽之前和之后的index没变，就直接return
      if (newIndex.value == oldIndex.value) {
        return
      }
      let params = {
        oldIndex: oldIndex.value,
        newIndex: newIndex.value,
        option: filterOption
      }
      //提交到store中
      store.commit('changeOrder', params)
    }

    return {
      isEditing,
      addTask,
      filteredTodos: computed(() => store.getters.getFilteredTodos(filterOption.value)),
      filterOption,
      options,
      todoCounts: state => store.getters.getTaskCount(state),
      editTask: id => {
        isEditing.value = true
        editingItem.value = store.getters.getTodoById(id)
      },
      editingItem,
      closeModal: () => (isEditing.value = false),
      onDragStart,
      onDragOver,
      onDragEnd
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #212529;
  margin-top: 80px;
}
*,
::after,
::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.container {
  width: 100%;
  max-width: 720px;
  padding: 0 15px;
  margin: 0 auto;
}
.btn-regular {
  padding: 0.25rem 0.5rem;
  color: #fff;
  background-color: #007bff;
  border: 1px solid #007bff;
  border-radius: 0;
  font-size: 0.875rem;
  line-height: 1.5;
}
button {
  cursor: pointer;
}
.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  // 添加待办事项
  .input-form {
    display: flex;
    width: 100%;
    margin-top: 15px;
    .form-label {
      display: flex;
      font-size: 1rem;
      border: 1px solid #979797;
      border-right: none;
      background: #faf9f9;
      line-height: 1.5;
      padding: 0.25rem 0.5rem;
    }
    input[type='text'] {
      padding: 2px 4px;
      font-size: 1rem;
      flex-grow: 1;
    }
  }

  // 筛选项
  .status-boxes {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    label {
      display: flex;
      align-items: center;
    }

    .status-name {
      margin: 0 5px;
    }

    .badge {
      display: inline-block;
      padding: 2px 5px;
      text-align: center;
      border-radius: 0.25rem;
      font-size: 75%;
      white-space: nowrap;
      font-weight: bold;
      vertical-align: baseline;

      &-light {
        background-color: #fff;
        border: 1px solid #000;
      }

      &-warning {
        background-color: #ffc107;
        border: 1px solid #ffc107;
      }

      &-success {
        color: #fff;
        background-color: #28a745;
        border: 1px solid #28a745;
      }
    }
  }
}
</style>
