import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    // REACTIVE VARIABLES
    const counter = ref(5)

    // FUNCTIONS
    const increase = () => {
      // INCREMENT VALUE BECAUSE IT IS A REACTIVE OBJECT
      counter.value++
    }
    return {
      counter,
      increase
    }
  }
})
