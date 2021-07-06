// 引入一个包
const path = require('path');

// webpack中的所有的配置信息都应该写在module.exports中
module.exports = {
    // 入口文件
    entry: "./src/index.ts",
    // 指定打包文件所在目录
    output: {
        // 指定打包后的目录
        path: path.resolve(__dirname, 'dist'), // 等同 "./dist"
        filename: "bundle.js"
    },
    // 指定webpack打包时要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test指定的是规则生效的文件-- 用ts-loader去处理以ts结尾的文件
                test: /\.ts$/,
                // 要使用的loader
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }

}