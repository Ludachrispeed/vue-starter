<template>
<div id="app" class="container-fluid">
  <div class="row">
    <div class="col-md-2">
      <Sidebar/>
    </div>
    <div class="col-md-10">
      <Main/>
    </div>
  </div>
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
  }
}
</script>

<style>
a {
  color: #42b983;
}
</style>
