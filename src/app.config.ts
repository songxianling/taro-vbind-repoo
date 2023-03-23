export default defineAppConfig({
  pages: ['pages/index/indexPage', 'pages/coupon/couponPage'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#f4f4f4',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
    // navigationStyle: 'custom'
  },
  tabBar: {
    // custom: true,
    color: '#666666',
    selectedColor: '#333333',
    borderStyle: 'black',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/index/indexPage',
        iconPath: 'assets/img/index.png',
        selectedIconPath: 'assets/img/index-active.png',
        text: '首页'
      },
      {
        pagePath: 'pages/coupon/couponPage',
        iconPath: 'assets/img/coupon.png',
        selectedIconPath: 'assets/img/coupon-active.png',
        text: '优惠券'
      }
    ]
  }
})
