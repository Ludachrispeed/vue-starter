<template>
<div id="app">
  <Sidebar/>
  <Main/>
</div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Main from './components/Main.vue'

export default {
  name: 'app',
  components: {
    Sidebar,
    Main
  },
  data () {
    return {
      msg: 'App Component msg'
    }
  }
}
</script>

<style>
#app {
  color: #2c3e50;
}

a {
  color: #42b983;
}
</style>
