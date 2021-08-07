<template>
  <div class="container">
    <div class="card">
      <button class="btn" @click="titleColor = 'red'">Make it red</button>
      <button class="btn" @click="colorType = colorType === 'color' ? 'backgroundColor' : 'color'">Change color type</button>
      <h3 v-mycolor:[colorType].blink="titleColor">Vue custom directives</h3>
      <div class="form-element">
        <label for="element">I am input</label>
        <input v-myfocus type="text" id="element">
      </div>
    </div>
  </div>
  
</template>

<script>
import focusDirective from './focusDirective'
import colorDirective from './colorDirective'
  export default {
    name: 'App',
    data () {
      return {
        titleColor: 'green',
        colorType: 'color'
      }
    },
    directives: {
      myfocus: focusDirective,
      mycolor: colorDirective
    }
  }
</script>

