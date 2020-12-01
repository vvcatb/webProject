const prodPlugins = []
if (process.env.NODE_ENV !== 'development') {
  prodPlugins.push('transform-remove-console')
}

module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    // ['import', { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true }],
    ...prodPlugins
  ]
};
