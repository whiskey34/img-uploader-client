const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    // proxy: "http://localhost:5000"
    url: "https://uploader-devch-app.herokuapp.com/"
    // url: "https://devchallenges_upload_server.herokuapp.com"
  },

  publicPath: "./",
}