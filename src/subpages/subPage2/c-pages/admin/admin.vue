<template>
    <scroll-view class="container" scroll-y="true">
        <!--        卡片-->
        <view class="cards">
            <view v-for="(item, index) in data" class="card-item">
                <view class="card" :key="index">
                    <text>{{ item.time }}</text>
                    <text class="result"
                        >{{ item.region }}疑似出现{{ item.thing }}</text
                    >
                </view>
            </view>
        </view>
    </scroll-view>
</template>

<script setup lang="ts">
const data = [
    {
        region: '河北',
        time: '2022-04-02',
        thing: '轻度事件',
    },
    {
        region: '湖南',
        time: '2022-04-05',
        thing: '中度事件',
    },
    {
        region: '海南',
        time: '2022-03-02',
        thing: '重度',
    },
]
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
