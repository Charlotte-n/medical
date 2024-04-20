import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHomeStore = defineStore('HomeStore', () => {
    const chuFangData = ref()
    const handleChuFangData = (val: []) => {
        chuFangData.value = val
    }

    return {
        chuFangData,
        handleChuFangData,
    }
})
