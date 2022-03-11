<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- setting condition to render the Component-->
    <!-- use ":" on the before the key, if the value is a variable-->
    <!-- "@" listens to an "emit" from the Component, and runs the value function when its called-->
    <HelloWorld
      v-if="renderHelloWorld"
      msg="Welcome to Your Vue.js App"
      :renderHelloWorld="renderHelloWorld"
      @update-render-hello-world="updateRenderHelloWorld"
    />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  data() {
    return {
      renderHelloWorld: true
    }
  },
  name: 'App',
  components: {
    HelloWorld
  }, methods: {
    updateRenderHelloWorld(event) {
      this.renderHelloWorld = event
    }
  }
}
</script>

<style>
@import "./imported-css.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
