import { createApp } from 'vue'

import './app.scss'

const App = createApp({
  // 对应 onLaunch
  onLaunch(options) {
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onShow(options) {
    console.log('小程序onShow-options参数', options)
  }
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

function setupApp() {
}

setupApp()

export default App
