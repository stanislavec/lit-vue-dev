<template>
	<div>
		<h1>{{ text }}</h1>
		<div>Test clicked {{ click }}</div>
		<button @click="clickCount()">Посчитать клики</button>
		<br />
		<router-link to="/">Go home</router-link>
	</div>
</template>

<script>
export default {
	name: 'Test',
	data() {
		return {
			text: 'Main Title',
			click: 0,
		};
	},
	methods: {
		clickCount() {
			return (this.click += 1);
		},
	},
	beforeCreate() {
		console.log('beforeCreate', 1);
	},
	created() {
		console.log('created', 2);
	},
	beforeMount() {
		console.log('beforeMount', 3);
	},
	mounted() {
		console.log('mounted', 4);
	},
	beforeUpdate() {
		console.log('beforeUpdate', 5);
	},
	updated() {
		console.log('updated', 6);
	},
	beforeDestroy() {
		console.log('beforeDestroy', 7);
	},
	destroyed() {
		console.log('destroyed', 8);
	},
};
</script>
