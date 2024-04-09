<template>
    <scroll-view class="container" :show-scrollbar="false" :scroll-y="true">
        <!-- 头部用户信息 -->
        <view class="userinfo">
            <view class="avatar">
                <u-avatar
                    size="60"
                    text="北"
                    fontSize="18"
                    random-bg-color
                ></u-avatar>
            </view>
            <view>
                <view>
                    <text class="username">马如飞</text>
                    <text class="sex">男</text>
                    <text class="age">21岁</text>
                </view>
            </view>
        </view>
        <!--      下面的一些信息-->
        <view class="others">
            <ul>
                <li
                    v-for="item in MineListData"
                    :key="item.key"
                    class="li"
                    @click="gotoDetail(item.unique)"
                >
                    <i :class="item.icon"></i>
                    <text>{{ item.value }}</text>
                </li>
            </ul>
        </view>
    </scroll-view>
</template>

<script setup lang="ts">
import { MINE_LIST_ENUM, MineListData } from '@/data/mine'

const gotoDetail = (type: number) => {
    switch (type) {
        case MINE_LIST_ENUM.profile:
            uni.navigateTo({ url: '/pages/mine/c-pages/profile/profile' })
            break
        case MINE_LIST_ENUM.test:
            uni.navigateTo({ url: '/pages/mine/c-pages/test/test' })
            break
        case MINE_LIST_ENUM.admin:
            uni.navigateTo({ url: '/pages/mine/c-pages/admin/admin' })
            break
    }
}
</script>

<style lang="scss" scoped>
.container {
    height: 100vh;
    padding: 20rpx 20rpx;
    width: 95%;
    background-color: #f0f0f0;
    .userinfo {
        display: flex;
        align-items: center;
        background-color: #04c6ae;
        border-radius: 10rpx;
        padding: 50rpx 50rpx;
        .avatar {
            width: 150rpx;
            height: 150rpx;
            margin-right: 100rpx;
        }
        .username,
        .sex,
        .age {
            margin-right: 30rpx;
            color: white;
        }
        .sex,
        .age {
            font-size: 30rpx;
        }
    }
    .others {
        margin-top: 50rpx;
        padding: 20rpx;
        border-radius: 20rpx;
        background-color: white;
        font-size: 30rpx;

        .li {
            display: flex;
            align-items: center;
            padding: 30rpx 0;
            border-bottom: 1rpx solid #f6f7f7;
            &:last-child {
                border-bottom: 0 solid white;
            }
            .iconfont {
                margin-right: 20rpx;
                font-size: 50rpx;
            }
        }
    }
}
</style>
