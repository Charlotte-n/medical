<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
onLaunch(() => {
    console.log('App Launch')
})
onShow(() => {
    console.log('App Show')
})
onHide(() => {
    console.log('App Hide')
})
</script>
<template>
    <view>测试</view>
</template>
<style lang="scss">
@import '@/uni_modules/uview-plus/theme.scss';
@import '@/static/css/iconfont.css';
</style>
