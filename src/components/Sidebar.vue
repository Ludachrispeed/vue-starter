<template>
<div id="sidebar">
  <h1>{{msg}}</h1>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Sidebar Component msg'
    }
  }
}
</script>

<style>
#sidebar {
  color: #A122FF;
}

a {
  color: #42b983;
}
</style>
