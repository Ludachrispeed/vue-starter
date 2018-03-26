<template>
<div id="sidebar" class="bg-secondary">
  <h1>Sidebar</h1>
  <ul>
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

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
