const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#4553F0', // customize as needed
      '@link-color': '#4553F0', // customize as needed
      '@font-size-base': '18px' // customize as needed
    }
  })
);