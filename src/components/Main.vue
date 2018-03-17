<template>
<div id="main">
  <h1>{{msg}}</h1>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Main Component'
    }
  }
}
</script>

<style>
#main {
  border: 1px solid red;
  text-align: center;
}
</style>
