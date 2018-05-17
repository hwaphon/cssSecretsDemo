<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

html, body {
	height: 100%;
	background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
</style>
