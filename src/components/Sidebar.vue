<template>
<div id="sidebar">
  <h1>{{msg}}</h1>
  <router-link to="/foo">Go to Foo</router-link>
  <router-link to="/bar">Go to Bar</router-link>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Sidebar Component'
    }
  }
}
</script>

<style>
#sidebar {
  border: 1px solid green;
}

a {
  color: #42b983;
}
</style>
