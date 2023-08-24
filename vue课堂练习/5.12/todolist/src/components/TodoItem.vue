<template>
  <div class="list-group-item">
    <div class="todo-move">
      <font-awesome-icon icon="ellipsis-v" size="xs"/>
    </div>
    <div :class="['pointer', 'todo-status', 'todo-status-'+todo.color]"
      @click="changeEventHandler"></div>
    <div class="todo-text" :title="todo.content"
      @click="changeEventHandler">{{todo.content}}</div>
    <div @click="editEventHandler">
      <font-awesome-icon icon="edit" size="xs" class="pointer"/>
    </div>
    <div @click="removeEventHandler">
      <font-awesome-icon icon="times" size="xs" class="pointer"/>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'TodoItem',
  props: {
    todo: Object
  },
  setup(props, { emit }) {
    const store = useStore()

    return {
      changeEventHandler: () => store.commit('changeState', props.todo.id),
      editEventHandler: () => emit('edit'),
      removeEventHandler: () => store.commit('removeTask', props.todo.id)
    }
  }
}
</script>

<style lang="scss">
// todo列表
.main-content {
  padding-top: 2rem;

  .list-group {
    border-left: 1px solid #979797;
    border-right: 1px solid #979797;

    .list-group-item:first-child {
      border-top: 1px solid #979797;
    }

    .list-group-item {
      border-bottom: 1px solid #979797;
      padding: 0.25rem 0.5rem;
      background-color: #faf9f9;  
      display: flex;
      align-items: center;

      div {
        padding: 0.25rem;
      }

      .pointer {
        cursor: pointer;
      }

      .todo-move {
        cursor: move;
      }

      .todo-status {
        width: 20px;
        height: 20px;
        display: inline-block;
        border-radius: 50%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;

        &-light {
          border: 1px solid #000;
          background-color: #fff;
        }

        &-warning {
          border: 1px solid #ffc107;
          background-color: #ffc107;
        }

        &-success {
          border: 1px solid #28a745;
          background-color: #28a745;
        }
      }

      .todo-text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        flex-grow: 1;
        text-align: left;
      }
    }
  }
}
</style>
