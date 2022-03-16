<template>
  <div class="inner">
    <!-- this element renders the current Component in the current Router (didn't find a use for it yet)-->
    <!-- <router-view></router-view> -->

    <h3 ref="title">InnerWorld</h3>
    <label>NewWorld Inputted Text: {{query}}</label>
  </div>
</template>

<script>
export default {
  data() {
    return ({
      //extracting the "NewWorld" query
      query: this.$route.query.input
    })
  }
}
</script>

<style scoped>
label {
  cursor: text;
}
</style>