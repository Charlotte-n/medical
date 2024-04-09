<template>
    <scroll-view class="container" scroll-y="true">
        <!--        卡片-->
        <view class="cards">
            <view
                v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
                class="card-item"
            >
                <view class="card" :key="item">
                    <text>2024-05-04</text>
                    <text class="result">结果</text>
                </view>
            </view>
        </view>
    </scroll-view>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
    height: 100vh;
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
