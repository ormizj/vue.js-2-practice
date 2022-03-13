<template>
  <div class="hello">
    <h6>{{ example }} {{counter}}</h6>
    <h1>{{ msg }}</h1>
    <!-- setting condition to render the element -->
    <p v-if="true">
      For a guide and recipes on how to configure / customize this project,
      <br />check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
      >vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
        >babel</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
        >eslint</a>
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
          rel="noopener"
        >Core Docs</a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
          rel="noopener"
        >Forum</a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
          rel="noopener"
        >Community Chat</a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
          rel="noopener"
        >Twitter</a>
      </li>
      <li>
        <a
          href="https://news.vuejs.org"
          target="_blank"
          rel="noopener"
        >News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a
          href="https://router.vuejs.org"
          target="_blank"
          rel="noopener"
        >vue-router</a>
      </li>
      <li>
        <a
          href="https://vuex.vuejs.org"
          target="_blank"
          rel="noopener"
        >vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
        >vue-devtools</a>
      </li>
      <li>
        <a
          href="https://vue-loader.vuejs.org"
          target="_blank"
          rel="noopener"
        >vue-loader</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
        >awesome-vue</a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    //updating "data" variables will cause the Component to re-render itself (and will call the "Updated()" method)
    //only "data" variables can be used in the "template" element
    return {
      example: 'Example of using data in the "template" element',
      counter: 1
    }
  },
  name: 'HelloWorld',
  props: {
    msg: String,
    renderHelloWorld: Boolean
  },
  mounted() {
    console.log('HelloWorld Mounted')

    //this value cannot be used in the "template" element
    this.newValue = 'Example of creating a new value for the Component'

    this.intervalId1 = setInterval(() => {
      console.log(++this.counter);
    }, 1000);

    setTimeout(() => {
      //Vue pre-defined methods will always start with the "$" symbol
      this.$emit('update-render-hello-world', false)
      this.$destroy() //calling this function alone, will not cause "HelloWorld" to stop rendering
    }, 5000)
  },
  updated() {
    //you can update a non-"data" variables in the "updated()" method, because they do not cause a re-render to the Component 
    //(therefore the "updated()" method will not be called)
    this.newValue = 'This will not crash the application'

    console.log('HelloWorld Updated')
  },
  destroyed() {
    console.log('HelloWorld Destroyed')
    clearInterval(this.intervalId1)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
