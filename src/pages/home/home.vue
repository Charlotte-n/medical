<template>
    <!-- HTML模板内容 -->
    <view class="container">
        <view class="img">
            <image src="/static/icon/zixun.png"></image>
        </view>
        <view class="content">
            <button @click="onPrescriptionCheck">处方查询</button>
            <button @click="onHeartRateCheck">心率自查</button>
        </view>
    </view>
</template>

<script setup>
import Style from '@/uni_modules/uview-plus/libs/mixin/style'

const onPrescriptionCheck = () => {
    // 使用 uni.navigateTo 进行页面跳转
    uni.navigateTo({
        url: '/subpages/TransferPage/tran_cam?type=1', // 页面路径，注意前面的斜杠和不需要写文件后缀
    })
}
const onHeartRateCheck = () => {
    // 使用 uni.navigateTo 进行页面跳转
    uni.navigateTo({
        url: '/subpages/TransferPage/tran_cam?type=2', // 页面路径，注意前面的斜杠和不需要写文件后缀
    })
}
uni.authorize({
    scope: 'scope.userInfo',
    success(res) {
        console.log(res)
        // 用户同意授权
        // 在这里调用 uni.getUserInfo 获取用户信息
    },
    fail() {
        // 用户拒绝授权
        // 可以给出友好提示或再次请求授权
    },
})
</script>

<style scoped lang="scss">
.container {
    margin: auto;
    .img {
        margin: auto;
        text-align: center;
        image {
            height: 300px;
        }
    }
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}

button {
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    background-color: #1296db;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 200px; /* 设置按钮宽度 */
    height: 50px; /* 设置按钮高度 */
    line-height: 25px;
}
</style>
