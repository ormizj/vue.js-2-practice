<template>
  <table>
    <tr>
      <th>If &#38; Else</th>
      <th>Array Loop</th>
      <th>Object Loop</th>
      <th>Filtered Loop</th>
      <th>Computing &#38; Watch</th>
    </tr>
    <tr>
      <td>
        Data #1
      </td>
      <td>
        <div
          v-for="element,index in array"
          :key="index"
        >
          Element: {{element}} Index: {{index}}
        </div>
      </td>
      <td>Data #3</td>
      <td>Data #4</td>
      <td>
        <label>{{computedMinus}}</label>
        &nbsp;
        <button v-on:click="updateValues">{{computedValue}}</button>
        &nbsp;
        <label>{{computedPlus}}</label>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  data() {
    return {
      array: [1, 2, 3, 4, 5],
      json: {
        'key-1': 'value-1',
        'key-2': 'value-2',
        'key-3': 'value-3',
        'key-4': 'value-4',
        'key-5': 'value-5'
      },
      computedValue: 1,
    }
  },

  //computed can be used to mutate "data" variables to make the accessability easier
  //will not cause the Component to update, if using non-"data" variables
  computed: {
    evenNumbers() { return this.array.filter((number) => number % 2 === 0) },

    //these 2 methods will be ran again ONLY when "computedValue" is updated
    computedPlus() {
      return this.computedValue + 1
    },
    computedMinus() {
      return this.computedValue - 1
    }
  },

  //methods inside "watch" CANNOT be called, they are used for listening to changes
  watch: {
    //the method name will is ALWAYS represented by the data variable name
    computedValue() {
      console.log(this.computedValue)
    }
  },

  methods: {
    updateValues() {
      this.computedValue++
    }
  }
}
</script>

<style scoped>
table {
  margin-top: 15px;
  width: 100%;
}

td {
  padding-top: 15px;
}
</style>