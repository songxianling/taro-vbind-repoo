// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
const args = process.argv
const isOpenDevTools = args.includes('--devtools')

const CIPluginOpt = {
  // 微信小程序
  weapp: {
    appid: 'wx2d7703ee738903a1',
    // 在开放平台下载的密钥文件；放到根目录的路径
  },
  // 版本号
  version: '0.0.2',
  // 版本发布描述
  desc: '版本描述'
}

const config = {
  projectName: 'mini3',
  date: '2022-9-27',
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
  alias: {
    '@': path.resolve(__dirname, '..', 'src')
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: isOpenDevTools
    ? ['@tarojs/plugin-html', '@tarojs/plugin-vue-devtools']
    : ['@tarojs/plugin-html'],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {}
  },
  framework: 'vue3',
  compiler: 'webpack4',
  sass: {
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ['nut-']
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    webpackChain(chain, webpack) {
      chain.merge({
        module: {
          rule: [
            {
              test: /.js$/,
              loader: 'babel-loader'
            }
          ]
        }
      })
    }
    // webpackChain(chain, webpack) {
    //   chain.plugin('analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
    // }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: [],
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

export default function (merge) {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return merge({}, config, require('./dev'))
  }
  if (process.env.NODE_ENV === 'test') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return merge({}, config, require('./test'))
  }
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return merge({}, config, require('./prod'))
}
