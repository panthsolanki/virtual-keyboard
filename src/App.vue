<template>
  <div id="app">
    <keyboard/>
  </div>
</template>

<script>
import keyboard from './components/keyboard/keyboard.vue'

export default {
  name: 'App',
  components: {
    keyboard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
}
</style>
