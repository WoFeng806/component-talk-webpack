
// “__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
const webpack = require('webpack')

module.exports = {
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
      path: __dirname + "/public",//打包后的文件存放的地方
      filename: "bundle.js"//打包后输出文件的文件名
    },

    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    
    module: {
        // 加载器匹配值
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true, // 指定启用css modules
                            // 类名就放心使用把，相同的类名也不会造成不同组件之间的污染。
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式  
                        }
                    }
                ]
            }
        ]
    }
}