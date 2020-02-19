const {override, fixBabelImports, addLessLoader, addWebpackPlugin} = require('customize-cra');

const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const theme = require('./theme')

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,

    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: theme,
    }),
    addWebpackPlugin(new AntdDayjsWebpackPlugin()),
);