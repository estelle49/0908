# webpack
功能强大
中文网/英文网 webpack
静态模块打包工具
生成一个或多个bundle
核心概念：
- 入口entry 输入文件   在vscode新建webpack
指示webpack以哪个文件为入口开始打包（常使用主模块文件为入口）
- 输出 output
打包后bundle输出到哪里去
- loader 
webpack只能识别 js和json文件 ，其他文件会直接报错
loader能帮webpack加载它识别不了的模块
- 插件
执行loader做不了的事
执行任务更加强大的工作（解决loader的痛点）
- 模式
development 开发环境
能将ES6模块化语法编译成浏览器能识别的模块化语法
production 生产环境
能将ES6模块化语法编译成浏览器能识别的模块化语法
压缩js代码
浏览器兼容
# webpack的使用
下载安装
npm i webpack webpack-cli -g
需要运行文件的终端
npm i webpack webpack-cli -D
webpack ./src/js/app.js -o ./build/js/built.js --mode=development    开发环境
node .\build\js\built.js 在nodejs中运行
在HTML中引入文件，可以直接在浏览器中运行
<script src="../build/js/built.js"></script>
webpack ./src/js/app.js -o ./build/js/built.js --mode=production  生产环境

# 使用webpack编译css文件
在入口文件中引入css文件
import ‘../css/test1.css’
输入 webpack运行
webpack不能识别css文件，所以需要使用loader，
定义配置webpack文件 webpack.config.js
内容：
const {resolve}=require('path')
//暴露配置对象
module.exports = {
  entry：'./src/js/app.js',  // 入口文件
  output:{
    filename: 'built.js', // 输出的文件名
    path：resolve{__dirname,'build/js'}  // 输出文件路径
  },
  //loader
  module:{
    rules:{
      //loader配置
      test:/\.css$/,  // 检测.css文件结尾

      use:[
        'style-loader',
        'css-loader'
      ]
    }, 
 
  }
plugins:[]
  //模式
   mode:'development'
}
//进入官网
//寻找css-loader
//配置loader
//npm install --save-dev css-loader
//在入口文件中引入css文件
import ‘../css/test1.css’
//npm install --save-dev style-loader
//npm install style-loader -D

# 使用webpack编译less文件
在入口文件中引入css文件
import ‘../less/test1.less’
node .\build\js\built.js 在nodejs中运行
运行会提示失败，webpack不能识别less文件
安装
npm install less-loader --save-dev
配置文件
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
          },
        ],
      },
    ],
  },
};
npm install less -D
webpack运行

# 处理图片
在less文件中引入图片
 npm install url-loader --save-dev
配置
test:/\.(png|jpg|gif)$/,
loader:'url-loader',
options:{
  limit:8192,
  name:'[hash:10].[ext]'
  outputPath:'imgs'  //表示输出路径  为path+outputPath build/imgs  将配置文件中的path改为build, filename改 ./js/built.js
}

# html文件处理
插件名 htmlwebpackplugin
配置插件(plugins)
下载插件
引入插件
配置插件 plugins:[new 插件名]
此插件只能处理html文件，不能处理html中的图片
使用html-loader
问题：
# 图标处理
-