<template>
  <table class="bye">
    <tr>
      <th>If &#38; Else</th>
      <th>Array Loop</th>
      <th>Object Loop</th>
      <th>Filtered Loop</th>
      <th>Computing &#38; Watch</th>
    </tr>
    <tr>
      <td>
        <label v-if="array.includes(parseInt(Math.random()*10))">if</label>
        <label v-else-if="array.includes(parseInt(Math.random()*5))">else if</label>
        <label v-else>else</label>
        <br><br>
        <div>
          <button v-on:click="updateValues">Try Again</button>
        </div>
      </td>
      <!-- the ":key" element should NEVER be an index (because index can change, while the value remains the same) -->
      <!-- the ":key" element should be unique between all the children of the same common parent: -->
      <!-- if you have an element with keys, and inside it another element with keys, the keys between the elements should be unique-->
      <td>
        <!-- you can also use only 1 parameter, instead of both  -->
        <!-- (for array it will be the element) (for object it will be the value) -->
        <div
          v-for="(element, index) of array"
          :key="element"
        >
          <label> Index: {{index}} — Element: {{element}}</label>
        </div>
      </td>
      <td>
        <div
          v-for="(value, key) in object"
          :key='key'
        >
          <label> Key: {{key}} — Value: {{value}}</label>
        </div>
      </td>
      <td>
        <div
          v-for="(element,index) of oddNumbers"
          :key="element"
        >
          <label> Index: {{index}} — Element: {{element}}</label>
        </div>
      </td>
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
      object: {
        'key1': 'value1',
        'key2': 'value2',
        'key3': 'value3',
        'key4': 'value4',
        'key5': 'value5'
      },
      computedValue: 1,
    }
  },

  //computed can be used to mutate "data" variables to make the accessability easier
  //will not cause the Component to update, if using non-"data" variables
  //computed methods should ALWAYS return a value (that's the point of them)
  computed: {
    oddNumbers() { return this.array.filter((number) => number % 2 === 1).map(number => number * 10) },

    //these 2 methods will be ran again ONLY when "computedValue" is updated
    computedPlus() {
      return this.computedValue + 1
    },
    //computed method, by default will only be a "get" method,
    //but you can add a "set" method if other variables need to be changed based on the new computed value
    computedMinus: {
      get() {
        return this.computedValue - 1
      },
      //set will always have 1 parameter, which is the value returned from the "get" method
      set(newValue) {
        this.existingDataValue = newValue
      }
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

table label {
  cursor: text;
}
</style>