<template>
    <view class="container">
        <text class="text-content">面部采集</text>
        <camera
            v-if="agree"
            device-position="front"
            flash="off"
            style="width: 60%; height: 200px"
        ></camera>
        <button class="confirm-button" @click="confirmAction">
            开启摄像头
        </button>
        <up-loading-page :loading="loading"></up-loading-page>
        <up-popup :show="show" mode="center">
            <view class="tishi">
                <text class="desc">网络问题,请重新上传</text>
                <up-button type="primary" @click="close">重新上传</up-button>
            </view>
        </up-popup>
    </view>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { PostChuFangFile } from '@/services/home'
import { useHomeStore } from '@/stores/slice/home'
import { onLoad } from '@dcloudio/uni-app'
const HomeStore = useHomeStore()

// 控制摄像头组件的显示
const src = ref('')
const agree = ref(false)
const close = () => {
    show.value = false
}
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
const chuFangData = ref([])

// 点击确认按钮的行为
const type = ref('')
const loading = ref(false)
const show = ref(false)
const open = () => {}
const confirmAction = () => {
    //开启摄像头
    uni.chooseVideo({
        success: async (res) => {
            src.value = res.tempFilePath
            //进行一下loading
            loading.value = true
            if (type.value == 1) {
                await uni.uploadFile({
                    url: 'https://u241567-91ae-dfbfcb8e.neimeng.seetacloud.com:6443/upload',
                    filePath: res.tempFilePath,
                    name: 'file',
                    formData: {
                        file: {
                            url: res.tempFilePath,
                        },
                    },
                    success: (res) => {
                        if (res.statusCode >= 200 && res.statusCode <= 300) {
                            HomeStore.handleChuFangData(res.data)
                            loading.value = false
                            uni.navigateTo({
                                url: '/subpages/c-pages/showImage',
                            })
                        } else {
                            show.value = true
                            loading.value = false
                        }
                    },
                    fail: (res) => {
                        show.value = true
                    },
                })
            } else {
                //随机生成数组
                let result = ref([])
                for (let i = 0; i < 30; i++) {
                    result.value.push((Math.random() * 100).toFixed(0))
                }
                HomeStore.handleChuFangData(result.value)
                await uni.navigateTo({
                    url: '/subpages/c-pages/showImage',
                })
                loading.value = false
            }
        },
    })
}
onLoad((option) => {
    type.value = option.type
})
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
.desc {
    margin-bottom: 15px;
}
.tishi {
    padding: 20px;
}
</style>
