<template>
  <div id="app">
    <Clima />
  </div>
</template>

<script>
import Clima from './components/Clima.vue'

export default {
  name: 'App',
  components: {
    Clima
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 40px;
}
</style>