<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <button @click="change">click</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { provide } from 'vue'

import { key, value } from './store'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    provide(key, value)

    const change = () => value.a += 1

    return {
      change
    }
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
  margin-top: 60px;
}
</style>
