<template>
  <view class="coupon-page-wrap">
    indexPage
    <view class="inner-box">inner-box</view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const wrapW = ref('200px')

const menuBtnInfo = ref<any>({
  width_px: '30px'
})

/** 设置页面属性 */
definePageConfig({
  navigationBarTitleText: 'index',
  navigationBarBackgroundColor: '#FEAA00'
})
</script>

<style lang="scss">
.coupon-page-wrap {
  width: v-bind(wrapW);
  .inner-box {
    background: yellow;
    padding: 10px;
    width: v-bind('menuBtnInfo.width_px');
  }
}
</style>
