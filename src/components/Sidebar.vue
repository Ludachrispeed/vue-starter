<template>
<div id="sidebar">
  <h1>Sidebar</h1>
  <ul class="list-unstyled">
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/foo">Foo</router-link></li>
    <li><router-link to="/bar">Bar</router-link></li>
  </ul>
</div>
</template>

<style>
#sidebar {
  padding: 1em;
}
</style>
