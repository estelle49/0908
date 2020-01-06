const { resolve } = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
//暴露配置对象
module.exports = {
    // 入口文件
    entry: './src/js/app.js',
    output: {
        filename: './js/built.js', // 输出的文件名
        path: resolve(__dirname, 'build') // 输出文件路径
    },
    //loader
    module: {
        rules: [
            //loader配置
            {
                test: /\.css$/, // 检测.css文件结尾
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: ['style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'less-loader' // compiles Less to CSS       
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: '[hash:10].[ext]',
                    outputPath: 'imgs', //表示输出路径  为path+outputPath build/imgs  将配置文件中的path改为build, filename改 ./js/built.js
                    esModule: false
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|mp3)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'media',
                    name: '[hash:10].[ext]'
                }
            },
            {
                test: /\.(html)$/,
                loader: 'html-loader'
            },
        ]
    },
    //plugins
    plugins: [new HtmlWebpackPlugin()],
    //模式
    mode: 'development'
};