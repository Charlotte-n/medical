<template>
  <view class="container">
    <text class="text-content">欢迎使用我们的微信小程序
通过先进的RPPG技术，我们致力于为您提供便捷、非接触式的医疗诊断服务。在开始之前，请仔细阅读以下重要须知和承诺，以确保您的体验既安全又有效。

隐私保护承诺
数据保护：您的所有视频资料和医疗数据将被加密处理，仅用于本次诊断。
隐私保障：我们不会未经您的明确同意，将您的任何信息用于其他目的。
信息安全：采用行业领先的安全技术保护您的数据不被泄露。
我们深知个人隐私信息的重要性，承诺将严格保护您的隐私安全，请您放心。

上传视频前的重要须知
为了确保诊断结果的准确性，上传视频前，请遵循以下指导原则：

1. 光照条件
选择光照良好的环境录制，自然光或均匀室内光线最佳，避免强光或过暗，确保视频清晰。(如下图所示)
2. 头部位置
请将头部保持在画面中央，面部特征清晰可见，不被遮挡，以便进行有效的数据分析（如下图所示）。
3. 视频长度与质量
视频通常不少于30秒，以收集足够的数据。使用高质量设置，避免模糊或抖动。
使用须知
本服务提供的医疗诊断结果仅供参考。我们努力确保通过RPPG技术提供尽可能准确的信息。然而，获取更详细和准确的医疗信息，请采用传统医疗检查方法，并咨询专业医疗人员。
我们期待为您提供高质量的医疗服务，感谢您的信任和支持！</text>
    <image class="image-content" src="/static/demo.png" mode="aspectFit"></image>
    <button class="confirm-button" @click="confirmAction">确认</button>
  </view>
</template>

<script>
export default {
  methods: {
    confirmAction() {
      // 使用 uni.navigateTo 进行页面跳转
      uni.navigateTo({
        url: '/pages/home/home'
      });
    }
  }
}
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
