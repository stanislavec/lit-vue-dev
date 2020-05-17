<template>
	<div>
		<h1>{{ userPhrase || 'Тут пока пусто' }}</h1>
		<input type="text" @input="(e) => changeUserPhrase(e.target.value)" />
		<br />
		<hr />
		<br />
		<div>{{ buttonCount }}</div>
		<button @click="incrementCount()">Посчитать клики</button>
		<br />
		<router-link to="/">Go home</router-link>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'Test',
	// "прокидываем" актуальные переменные state
	computed: { ...mapGetters(['buttonCount', 'userPhrase']) },
	watch: {},
	methods: {
		// "прокидываем" функции их нашего store
		...mapActions(['changeUserPhrase', 'incrementCount']),
	},
	mounted() {
		console.log('Mounted', this.$store);
		// console.log('mounted', 4);
	},
};
</script>
