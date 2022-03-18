<template>
  <div class="deep">
    <h3 ref="title">DeepWorld</h3>
    {{localRawHtml}}

    <!-- slots can take "templates" from the parent component,-->
    <!-- and render them easily with the "slot" element -->
    <slot></slot>
    <slot name="named"></slot>
  </div>
</template>

<script>
export default {
  //injecting this way changes the name of the injected value (injected values should not be changed, just like props)
  inject: {
    // injecting a value to a new name
    localRawHtml: { from: 'rawHtml' },
    //giving an injection a default value
    defaultInject: {
      default() { return 'Default Value' }
    }
  },

  data() {
    return {
      //you can also access injected values in "data"
      inputted: this.input
    }
  },

  mounted() {
    console.log(this.defaultInject)
  }
}
</script>

<style>
</style>