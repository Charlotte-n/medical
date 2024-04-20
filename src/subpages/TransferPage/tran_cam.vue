<template>
    <view class="container">
        <text class="welcome"> 欢迎使用我们的微信小程序 </text>
        <text>
            通过先进的RPPG技术，我们致力于为您提供便捷、非接触式的医疗诊断服务。在开始之前，请仔细阅读以下重要须知和承诺，以确保您的体验既安全又有效。
        </text>
        <view class="yinsi">
            <h4 class="first">隐私保护承诺</h4>

            <text>
                数据保护：您的所有视频资料和医疗数据将被加密处理，仅用于本次诊断。
            </text>
            <text>
                隐私保障：我们不会未经您的明确同意，将您的任何信息用于其他目的。
            </text>
            <text>
                信息安全：采用行业领先的安全技术保护您的数据不被泄露。
            </text>
            <text>
                信息安全：采用行业领先的安全技术保护您的数据不被泄露。
            </text>
            <text>
                我们深知个人隐私信息的重要性，承诺将严格保护您的隐私安全，请您放心。
            </text>
        </view>
        <view class="notify">
            <text class="first"> 上传视频前的重要须知 </text>
            <text>
                为了确保诊断结果的准确性，上传视频前，请遵循以下指导原则：
            </text>
            <text>
                1. 光照条件
                选择光照良好的环境录制，自然光或均匀室内光线最佳，避免强光或过暗，确保视频清晰。(如下图所示)
            </text>
            <text>
                2. 头部位置
                请将头部保持在画面中央，面部特征清晰可见，不被遮挡，以便进行有效的数据分析（如下图所示）。
            </text>
            <text>
                3. 视频长度与质量
                视频通常不少于30秒，以收集足够的数据。使用高质量设置，避免模糊或抖动。
            </text>
            <text>
                使用须知
                本服务提供的医疗诊断结果仅供参考。我们努力确保通过RPPG技术提供尽可能准确的信息。然而，获取更详细和准确的医疗信息，请采用传统医疗检查方法，并咨询专业医疗人员。
                我们期待为您提供高质量的医疗服务，感谢您的信任和支持！
            </text>
        </view>

        <button class="confirm-button" @click="confirmAction">确认</button>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
const type = ref()
const confirmAction = () => {
    // 使用 uni.navigateTo 进行页面跳转
    uni.navigateTo({
        url: '/subpages/TransferPage/TransferPage?type=' + type.value,
    })
}
onLoad((option: any) => {
    type.value = option.type
})
</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    padding-top: 0;

    font-size: 15px;
}
.welcome {
    padding: 10px;
}

.yinsi,
.notify {
    display: flex;
    flex-direction: column;
    font-size: 15px;
}

.notify {
    .first {
        padding: 10px;
        text-align: center;
    }
}
.yinsi {
    .first {
        padding: 10px;
        text-align: center;
    }
}
.image-content {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 300px; /* 根据实际需要调整 */
    height: 200px; /* 根据实际需要调整 */
}

.confirm-button {
    background-color: #1296db;
    color: white;
    padding: 0px 25px;
    border-radius: 5px;
}
</style>
