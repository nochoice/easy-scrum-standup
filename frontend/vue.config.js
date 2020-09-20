module.exports = {
  "transpileDependencies": [
    "vuetify"
  ], 
  productionSourceMap: false,
  configureWebpack: {
    optimization: {
        splitChunks: {
            minSize: 10000,
            maxSize: 200000,
        }
    }
  },
  pwa: {
    name: 'Easy Scrum Standup',
    themeColor: '#1976d2',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
  }
}
