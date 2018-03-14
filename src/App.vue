<template>
<div id="app">
  <img src="./assets/logo.png">
  <h1>{{msg}}</h1>
  <ul>
    <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
    <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
    <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'App Component msg'
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
