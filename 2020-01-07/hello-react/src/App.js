/**
 * 父组件，所有组件要使用的库都得引入
 */
import React, { Component } from 'react';
//等价于
//import React from 'react';
//import {Component} from 'react'
import Add from './component/add';
import List from "./component/list";

export default class App extends Component {
  //初始化状态, 用来表示评论
  state = {
    comments: [{
      username: 'jack',
      content: '评论回复内容',
      id:1
    },
    {
      username: 'jack',
      content: '评论回复内容',
      id:2
    },
    {
      username: 'jack',
      content: '评论回复内容',
      id:3
    }
    ]
  }
  //添加评论，更新状态
  add = (comment) => {
    const { comments } = this.state;
    this.setState({
      comments:[comment,...comments]
    })
  }
  del = (id) => {
    const { comments } = this.state;
    this.setState({
      comments:comments.filter((comment)=>comment.id!==id)
    })
  }
  render() {
    const { comments } = this.state;
    return <div>
    <header className="site-header jumbotron">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h1>请发表对React的评论</h1>
        </div>
      </div>
    </div>
  </header>
  <div className="container">
        <Add add={this.add}/>
        <List comments={comments} del={this.del}/>
   </div>
    </div>
  }

}