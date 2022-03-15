<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    />
    <div v-if='isApp'>
      <!-- the ":" or "v-" or signs usually indicates a "Vue" specific attribute -->
      <label
        class='hello-world-label'
        :class="{ 'hello-world-label-active': renderHelloWorld }"
      >
        {{ msg }}
      </label>
      <br><br>
      <!-- routing redirection -->
      <router-link to="/routing">Go to NewWorld</router-link>

      <hr color='black'>

      <!-- setting condition to render the Component-->
      <!-- use ":" on the before the key, if the value is a variable-->
      <!-- "@" listens to an "emit" from the Component, and runs the value function when its called-->
      <HelloWorld
        v-if="renderHelloWorld"
        msg="Welcome to Your Vue.js App"
        :renderHelloWorld="renderHelloWorld"
        @update-render-hello-world="updateRenderHelloWorld"
      />

      <ByeWorld v-if="!renderHelloWorld" />
    </div>

    <!-- checking routing before rendering -->
    <NewWorld v-if='isNewWorld' />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ByeWorld from './components/ByeWorld.vue'
import NewWorld from './components/NewWorld.vue'

export default {
  data() {
    return {
      renderHelloWorld: true,
      msg: 'HelloWorld is visible'
    }
  },
  name: 'App',
  components: {
    HelloWorld,
    ByeWorld,
    NewWorld
  }, methods: {
    updateRenderHelloWorld(event) {
      this.renderHelloWorld = event
      this.msg = 'HelloWorld is destroyed'
    }
  }, computed: {
    //checking routes for to decide which Components to render
    isApp() { return this.$route.name === 'App' },
    isNewWorld() { return this.$route.name === 'Routing' }
  }
}
</script>

<style>
@import "./imported-css.css";

.hello-world-label {
  cursor: text;
  color: red;
}
.hello-world-label-active {
  color: whitesmoke;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: green;
  margin-top: 60px;
}
</style>
