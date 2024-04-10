<template>
  <!-- HTML模板内容 -->
  <view>
    <button @click="onPrescriptionCheck">处方查询</button>
    <button @click="onHeartRateCheck">心率自查</button>
    
  </view>
</template>

<script setup>
import { ref } from 'vue';


const onPrescriptionCheck = () => {
  // 使用 uni.navigateTo 进行页面跳转
  uni.navigateTo({
    url: '/pages/TransferPage/TransferPage' // 页面路径，注意前面的斜杠和不需要写文件后缀
  });
};
const onHeartRateCheck = () => {
  // 使用 uni.navigateTo 进行页面跳转
  uni.navigateTo({
    url: '/pages/TransferPage/TransferPage' // 页面路径，注意前面的斜杠和不需要写文件后缀
  });
};

</script>

<style scoped>

button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #1a73e8;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 200px; /* 设置按钮宽度 */
  height: 50px; /* 设置按钮高度 */
}

button:hover {
  background-color: #1558b3;
}
</style>
