const withCss = require('@zeit/next-css') // 用于next加载css

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
}

module.exports = withCss({})
