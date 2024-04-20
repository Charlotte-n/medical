<template>
    <view class="container">
        <ul>
            <li class="item">
                <text>头像</text>
                <u-avatar></u-avatar>
            </li>
            <li class="item">
                <text>姓名</text>
                <text>马如飞</text>
            </li>
            <li class="item">
                <text>性别</text>
                <text>男</text>
            </li>
            <li class="item">
                <text>年龄</text>
                <text>21岁</text>
            </li>
        </ul>
    </view>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
    width: 85%;
    padding: 0 50rpx;
    font-size: 32rpx;
    .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 30rpx 0;
        border-bottom: 1rpx solid #f6f7f7;
    }
}
</style>
