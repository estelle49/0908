import React, { Component } from 'react'
import propTypes from 'prop-types'

import './index.css'

export default class Item extends Component {
  static propTypes = {
    comment: propTypes.object.isRequired,
    del:propTypes.func.isRequired
  }
  handleDel = () => {
    // 获取点击按钮所在的state值
    const { id, username } = this.props.comment
    //确认是否删除
    if (!window.confirm(`您确认删除${username}的评论吗？`)) return;
    //调用函数，删除指定id的state值
    this.props.del(id)
  
  }
  render() {
    const {username,content} = this.props.comment
    return <li className='comment'>
    <div className='btn'>
        <button onClick={this.handleDel}>删除</button>
  </div>
      <p>
        <span className='com-usurname'>{username}</span>
        <span className='com-usurname'>评论：</span>
      </p>
      <p className='content'>{content}</p>
    </li>

  }
}