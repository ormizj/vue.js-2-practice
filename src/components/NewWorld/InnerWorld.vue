<template>
  <div class="inner">
    <!-- this element renders the current Component in the current Router (didn't find a use for it yet)-->
    <!-- <router-view></router-view> -->
    <h3 ref="title">InnerWorld</h3>
    <label>NewWorld Inputted Text: {{query}}</label>

    <hr color='black'>

    <!-- slots can take "templates" from the parent component,-->
    <!-- and render them easily with the "slot" element (see "DeepWorld") -->
    <DeepWorld>
      This is also a default slot, but the line below overrides it

      <!-- slots should always be contained by the "template" element, -->
      <!-- and their parent element MUST be a component (you CAN'T do "<p><template></template></p>" for example)-->
      <template v-slot:default>
        <p>This is a default slot</p>
      </template>
      <template v-slot:named>
        <p>This is a named slot</p>
      </template>
    </DeepWorld>
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
  },

}
</script>

<style scoped>
label {
  cursor: text;
}
</style>