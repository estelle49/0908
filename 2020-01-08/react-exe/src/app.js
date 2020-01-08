//引入相关文件
import React, { Component } from 'react'

import './app.css'


import Add from './components/add'
import List from './components/list'
// 定义组件
export default class App extends Component{
  state = {
    comments: [{
      username: '作者',
      content: '欢迎大家评论',
      id:1
    },
    {
      username: 'jack',
      content: 'React的评论',
      id:2
    }]
  }
  add = (comment) => {
    const {comments}=this.state
    this.setState({
      comments:[comment,...comments]
    })
  }
  del = (id) => {
    const { comments } = this.state
    this.setState({
      comments:comments.filter(comment=>comment.id!==id)
    })
  }
  render() {
    const {comments}=this.state
    return <div>
      <header>
        <h1 className ='title'>请发表对React的评论</h1>
      </header>
      <div className='container'>
        <Add add={this.add}/>
        <List comments={comments} del={this.del}/>
      </div>
    </div>
  }
}