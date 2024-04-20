<template>
    <view class="echart">
        <Echart :yData="HomeStore.chuFangData"></Echart>
    </view>
</template>

<script setup lang="ts">
import Echart from '@/components/echart/Echart.vue'
import { useHomeStore } from '@/stores/slice/home'
import { onMounted } from 'vue'
const HomeStore = useHomeStore()
onMounted(() => {
    console.log(HomeStore.chuFangData, '我获取的数据')
})
</script>

<style scoped lang="scss">
.echart {
    width: 100%;
    height: 200px;
}
</style>
