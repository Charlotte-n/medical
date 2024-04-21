<script setup lang="ts">
import { onMounted, ref } from 'vue'
import LEchart from '@/subpages/bao/lime-echart/components/l-echart/l-echart.vue'
import * as echarts from 'echarts'
import { CanvasRenderer } from 'echarts/renderers'

const chart = ref()
const props = defineProps({
    yData: {
        type: Array,
    },
    width: {
        type: Number,
    },
})
const xData = [
    0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57,
    60, 63, 66, 69, 72, 75, 78, 81, 84, 87,
]
const init = () => {
    echarts.use([CanvasRenderer])
    chart.value.init(echarts)
    chart.value.setOption({
        xAxis: {
            type: 'category',
            data: xData,
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data:
                    typeof props.yData == 'string'
                        ? JSON.parse(props.yData as any)
                        : props.yData,
                type: 'line',
            },
        ],
    })
}
onMounted(() => {
    console.log(typeof props.yData, props.yData)
    // 组件能被调用必须是组件的节点已经被渲染到页面上
    setTimeout(async () => {
        if (!chart.value) return
        init()
    }, 400)
})
</script>

<template>
    <view class="container">
        <l-echart
            ref="chart"
            class="chart-content"
            @finished="init"
            :style="[
                props.width
                    ? { width: props.width + 'px' }
                    : { width: '500px' },
            ]"
        ></l-echart>
    </view>
</template>

<style scoped lang="scss">
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    .chart-content {
        height: 300px;
    }
}
</style>
