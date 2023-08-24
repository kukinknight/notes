<template>
	<p class="filters">
		<span v-for="item in items" @click="$emit('update:modelValue', item.value)" :class="{selected:modelValue === item.value}"
		:key="item.value">{{item.label}}</span>
	</p>
</template>

<script>
	export default {
		props: ['items', 'modelValue'],
		emits: ['update:modelValue'],
	}
</script>

<style>
	.filters span {
		margin-right: 5px;
		padding: 5px;
		border-radius: 4px;
	}

	.filters span.selected {
		border: 1px solid #EEEEEE;
	}
</style>
