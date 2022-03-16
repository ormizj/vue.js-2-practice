<template>
  <div class="new">
    <!-- this element will exist in the DOM but will not be visible to the user -->
    <label v-show="false">Hidden Text</label>

    <h3>NewWorld</h3>

    <!-- "v-model" binds the input value, to the "data" variable -->
    <input
      v-model="input"
      type="text"
    />
    <button
      v-on:click='submitInput'
      v-if="!isInnerWorld"
    >Submit</button>

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
      input: ''
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

  methods: {
    submitInput() {
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