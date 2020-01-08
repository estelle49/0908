import React, { Component } from 'react'
import propTypes from 'prop-types'

import './index.css'

import Item from '../item'

export default class List extends Component { 
  static propTypes = {
    comments:propTypes.array.isRequired
  }

  render() {
    const { comments,del } = this.props
    const isDisplay = comments.length ? 'none' :'block'
    return <div className='down'>
        <h2>评论回复:</h2>
        <h3 style={{display:isDisplay}}>暂无评论，点击左侧添加评论！！！</h3>
      <ul>  {
        comments.map((comment) => {
          return <Item comment={comment} key={comment.id} del={del}/>
        })
      }
      </ul>
    </div>
  }
}