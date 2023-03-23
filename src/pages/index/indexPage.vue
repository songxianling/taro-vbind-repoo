<template>
  <view class="coupon-page-wrap">
    index
    <view class="inner-box">inner-box</view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menuBtnInfo = ref<any>({
  width: '20px'
})

/** 设置页面属性 */
definePageConfig({
  navigationBarTitleText: 'index',
  navigationBarBackgroundColor: '#FEAA00'
})
</script>

<style lang="scss">
.coupon-page-wrap {
  .inner-box {
    background: yellow;
    padding: 10px;
    width: v-bind('menuBtnInfo.width');
  }
}
</style>
