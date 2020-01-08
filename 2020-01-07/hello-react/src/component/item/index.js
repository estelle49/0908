import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Item extends Component{
  static propTypes = {
    comment : PropTypes.object.isRequired
  }
  delComment = () => {
    // 获取当前元素的ID
    const { id, username } = this.props.comment;
    if (!window.confirm(`您确认要删除${username}的评论吗？`)) return;
    this.props.del(id);
  }
  render() {
    const { username,content } = this.props.comment;
    return <li className="list-group-item">
      <div className="handle">
        <button className="but" onClick ={this.delComment}>删除</button>
      </div>
      <p className="user"><span >{username}</span><span>说:</span></p>
      <p className="centence">{content}</p>
    </li>
  }
}