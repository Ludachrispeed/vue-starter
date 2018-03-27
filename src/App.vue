<template>
<div id="app" class="container-fluid">
  <div class="row">
    <div id="sidebar-container" class="col-md-3 bg-secondary">
      <Sidebar/>
    </div>
    <div id="main-container" class="col-md-9">
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
