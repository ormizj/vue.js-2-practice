<template>
  <div class="new">
    <!-- this element will exist in the DOM but will not be visible to the user -->
    <label v-show="false">Hidden Text</label>

    <!-- assigning a key to the element, so it can be changed directly with JS -->
    <h3 ref="title">NewWorld</h3>

    <!-- "v-model" binds the input value, to the "data" variable -->
    <input
      v-model="input"
      type="text"
    />
    &nbsp;

    <!-- "v-on:<action>" is the "Vue" way of handling user events (Example: v-on:click, v-on:submit) -->
    <!-- this can also handle refresh with "v-on:submit.prevent" to prevent the refresh of the page -->
    <!-- and can also take more advanced inputs, Example: "v-on:keyup.enter" and son on... -->
    <button
      v-on:click='submitInput'
      v-if="!isInnerWorld"
    >Submit</button>

    <!-- the "input" variable will not get updated after its first render, -->
    <!-- because the "v-once" keyword disables updates on the element (also affects children of this element)-->
    <label
      v-if="isInnerWorld"
      v-once
    >{{input}}</label>

    <!-- possible to use variables which are "HTML" elements with the "v-html", -->
    <!-- and rendering them, instead of showing their value as a String -->
    <div v-html="rawHtml"></div>

    <InnerWorld v-if="isInnerWorld" />
  </div>
</template>

<script>
import InnerWorld from './InnerWorld.vue'
import router from '../../router'
import { onRoute } from '../../utils/pathUtil'

export default {
  data() {
    return ({
      input: '',
      //can render HTML through variables
      rawHtml: '<hr color="black">'
    })
  },

  components: {
    InnerWorld
  },

  computed: {
    isInnerWorld() { return onRoute(this.$route, 'InnerWorld') }
  },

  //earliest initialization possible for adding routes
  beforeCreate() {
    // adding "InnerWorld" as a child of "NewWorld"
    router.addRoute(router.currentRoute.name, {
      path: '/new/inner', name: 'InnerWorld', component: InnerWorld
    })
  },

  mounted() {
    console.log(this.$refs)

  },

  methods: {
    submitInput() {
      //changing the element attribute with "ref"
      this.$refs.title.innerHTML = this.$refs.title.innerHTML + ' changed with ref'

      //pushing to a new path with a query
      router.push({
        path: '/new/inner', query: { input: this.input }
      })
    }
  },

  watch: {
    input() { console.log(this.input) }
  }
}


</script>

<style scoped>
</style>