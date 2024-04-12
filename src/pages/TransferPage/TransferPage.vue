<template>
    <view class="container">
        <text class="text-content">面部采集</text>
        <camera
            v-if="agree"
            device-position="front"
            flash="off"
            style="width: 100%; height: 400px"
        ></camera>
        <button class="confirm-button" @click="confirmAction">
            开启摄像头
        </button>
    </view>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 控制摄像头组件的显示
const showCamera = ref(false)
const src = ref('')
const agree = ref(false)
const Auth = () => {
    uni.authorize({
        scope: 'scope.camera',
        success() {
            agree.value = true
        },
        fail() {
            agree.value = false
            uni.showModal({
                title: '对不起,此功能需要使用摄像头，否则不能使用此功能',
                icon: 'none',
            })
            //跳转到首页
            uni.navigateTo({
                url: '/pages/home/home',
            })
        },
    })
}

// 点击确认按钮的行为
const confirmAction = () => {
    //开启摄像头
    uni.chooseVideo({
        success: (res) => {
            src.value = res.tempFilePath
        },
    })
}

// 摄像头出错处理
const onCameraError = (error) => {
    console.error('摄像头出错：', error)
    showCamera.value = false // 出错时关闭摄像头
}
onMounted(() => {
    Auth()
})
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.text-content {
    margin-bottom: 20px;
}

.image-content {
    width: 300px; /* 根据实际需要调整 */
    height: 200px; /* 根据实际需要调整 */
    margin-bottom: 20px;
}

.confirm-button {
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #1296db;
    color: white;
}
</style>
