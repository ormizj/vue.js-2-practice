<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    />
    <div>
      <label
        class='hello-label'
        :class="{ 'hello-label-active': renderHelloWorld }"
      >{{ msg }}</label>
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
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  data() {
    return {
      renderHelloWorld: true,
      msg: 'Hello World is visible'
    }
  },
  name: 'App',
  components: {
    HelloWorld
  }, methods: {
    updateRenderHelloWorld(event) {
      this.renderHelloWorld = event
      this.msg = 'Hello World is destroyed'
    }
  }
}
</script>

<style>
@import "./imported-css.css";

.hello-label {
  color: red;
}

.hello-label-active {
  color: whitesmoke;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: darkgreen;
  margin-top: 60px;
}
</style>
