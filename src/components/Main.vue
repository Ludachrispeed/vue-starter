<template>
<div id="main">
  <img src="./logo.png">
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
      msg: 'Main Component msg'
    }
  }
}
</script>

<style>
#main {
  border: 1px solid red;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
