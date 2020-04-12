<template>
	<div id="app">
		<div class="link-wrapper">
			<router-link to="/">Home</router-link>
			<router-link to="/test">Test Component</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App'
};
</script>

<style scoped>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

.link-wrapper {
	width: 100%;
	background-color: #2c3e50;
	padding: 10px 20px;
}

a {
	color: white;
	text-decoration: unset;
	padding: 5px 10px;
}

a:hover {
	color: #2c3e50;
	background-color: white;
}
</style>
