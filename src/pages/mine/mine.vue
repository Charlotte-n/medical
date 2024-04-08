<template>
  <view class="container">
    <!-- 头部用户信息 -->
    <view class="userinfo">
      <view class="avatar">
        <u-avatar size="60" text="北" fontSize="18" random-bg-color></u-avatar>
      </view>
      <view>
        <view>
          <text class="username">马如飞</text>
          <text class="sex">男</text>
          <text class="age">21岁</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.container {
  padding: 20rpx 20rpx;
  .userinfo {
    display:flex;
    align-items: center;
    background-color: #04c6ae;
    border-radius: 10rpx;
    padding: 50rpx 50rpx;
    .avatar {
      width: 150rpx;
      height: 150rpx;
      margin-right: 100rpx;
    }
    .username,.sex,.age{
      margin-right: 30rpx;
      color: white;
    }
    .sex,.age{
      font-size: 30rpx;
    }
  }
}
</style>
