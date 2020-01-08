/**
 * index.js是脚手架webpack的入口文件
 */
import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';
import "./index.css";
// dom元素id从public文件夹中的index.html文件中寻找
//jsx语法最终被babel编译成js语法
//凡是使用了jsx语法，都需要引入React
ReactDOM.render( < App / > , document.getElementById('app'))