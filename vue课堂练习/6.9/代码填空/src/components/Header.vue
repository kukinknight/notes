<template>
  <input class="new-todo" type="text" :value="todoTitle" @input="onInputChange" v-bind="$attrs" />
</template>

<script>
export default {
  props: {
    todoTitle: {
      type: String,
      default: ''
    }
  },
  methods: {
    onInputChange(e) {
      // --（6）——触发父组件中的传入的todo-title属性的更新
      this.$emit('update:todoTitle', e.target.value)
    }
  }
}
</script>

<style>
.new-todo {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}
</style>
