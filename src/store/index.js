import { reactive } from 'vue'

export const key = Symbol('key')
export const value = reactive({
  a: 1
})
