<template>
    <scroll-view class="container" scroll-y="true">
        <!--        卡片-->
        <view class="cards">
            <view
                v-for="(item, index0) in data"
                class="card-item"
                :key="index0"
            >
                <view class="card">
                    <text>{{ item.time }}</text>
                    <text class="result">结果</text>
                    <view>
                        <Echart :yData="item.bvp" :width="330"></Echart>
                    </view>
                </view>
            </view>
        </view>
    </scroll-view>
</template>

<script setup lang="ts">
//获取内容
import { http } from '@/services/http'
import { onMounted, ref } from 'vue'
import Echart from '@/components/echart/Echart.vue'

const data = ref([] as any)
const getHistoryContent = async () => {
    const res = await http({
        url: '//history',
        method: 'GET',
    })
    data.value = res
    console.log(res)
}
onMounted(() => {
    getHistoryContent()
})
</script>

<style scoped lang="scss">
.container {
    height: 100vh;
    margin: auto;
    background-color: #f0f0f0;
    .cards {
        padding: 30rpx;
        .card-item {
            &:first-child {
                margin-top: 0;
            }
            margin-top: 20rpx;
        }
        .card {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20rpx;
            border-radius: 10rpx;
            font-size: 30rpx;
            background-color: white;
            .result {
                margin-top: 20rpx;
                font-size: 28rpx;
            }
        }
    }
}
</style>
