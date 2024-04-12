<script setup lang="ts">
import { onMounted, ref } from 'vue'
import LEchart from '@/uni_modules/lime-echart/components/l-echart/l-echart.vue'
import * as echarts from 'echarts'
import { CanvasRenderer } from 'echarts/renderers'

const chart = ref()
const init = () => {
    echarts.use([CanvasRenderer])
    chart.value.init(echarts)
    chart.value.setOption({
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line',
            },
        ],
    })
}
onMounted(() => {
    // 组件能被调用必须是组件的节点已经被渲染到页面上
    setTimeout(async () => {
        if (!chart.value) return
        init()
    }, 3000)
})
</script>

<template>
    <view class="container">
        <l-echart ref="chart" class="chart-content"></l-echart>
    </view>
</template>

<style scoped lang="scss">
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    .chart-content {
        width: 500px;
        height: 300px;
    }
}
</style>
