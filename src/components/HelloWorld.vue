<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ a }}</h1>
  </div>
</template>

<script>
import { inject, toRefs, watch } from 'vue'
import { key } from '../store'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const value = inject(key)
    
    watch(() => value.a, v => {
      console.log(v)
    })

    return {
      ...toRefs(value)
    }
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
