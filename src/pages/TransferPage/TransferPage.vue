<template>
  <view class="container">
    <text class="text-content">1111</text>
    <image class="image-content" src="/static/demo.png" mode="aspectFit"></image>
    <button class="confirm-button" @click="confirmAction">开启摄像头</button>
    <!-- 条件渲染摄像头组件 -->
    <camera v-if="showCamera" device-position="back" @error="onCameraError"></camera>
  </view>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    // 控制摄像头组件的显示
    const showCamera = ref(false);

    // 点击确认按钮的行为
    const confirmAction = () => {
      showCamera.value = true; // 显示摄像头

      // 10秒后关闭摄像头
      setTimeout(() => {
        showCamera.value = false;
      }, 10000);
    };

    // 摄像头出错处理
    const onCameraError = (error) => {
      console.error('摄像头出错：', error);
      showCamera.value = false; // 出错时关闭摄像头
    };

    return {
      showCamera,
      confirmAction,
      onCameraError,
    };
  },
};
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
  background-color: #007aff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}
</style>
