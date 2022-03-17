<template>
  <div class="inner">
    <!-- this element renders the current Component in the current Router (didn't find a use for it yet)-->
    <!-- <router-view></router-view> -->

    <h3 ref="title">InnerWorld</h3>
    <label>NewWorld Inputted Text: {{query}}</label>

    <hr color='black'>
    <DeepWorld />
  </div>
</template>

<script>
import DeepWorld from './DeepWorld.vue'

export default {
  //this is for injecting by name (you can't change the name)
  inject: ['rawHtml'],

  data() {
    return ({
      //extracting the "NewWorld" query
      query: this.$route.query.input
    })
  },

  components: {
    DeepWorld
  }
}
</script>

<style scoped>
label {
  cursor: text;
}
</style>