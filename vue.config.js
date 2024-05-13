module.exports = {
  publicPath: './',
  devServer: {
    port: 8081,
    proxy: {
      '/api':{
        target: 'http://10.2.164.21:5000',    // backend url
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          '^/api': '',
        }
      }
    },
    // useLocalIp: true,
  },
  configureWebpack: {
    devtool: 'source-map',
    resolve: {extensions: [".ts", ".tsx", ".js", ".json", ".json5"]},
    module: {
      rules: [
        {
          test: /\.json$/,
          loader: 'json-loader',
          type: 'javascript/auto',
        },
        {
          test: /\.json5$/,
          loader: 'json5-loader',
          type: 'javascript/auto',
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          }
        }
      ]
    }
  }
}