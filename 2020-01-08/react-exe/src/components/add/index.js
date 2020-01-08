import React,{Component} from 'react'
import propTypes from 'prop-types'
import './index.css'

export default class Add extends Component{
  static propTypes = {
  add:propTypes.func.isRequired
}
  state = {
    username: '',
    content:''
  }
  id = 3
// 获取用户输入的数据,更新到state中
  handleComment = (key)=>{
    return (e) => {
      const value = e.target.value
      this.setState({
        [key]:value
      })
    }
  }
  // 点击按钮"发表评论"，将数据添加到List组件中
  handleClick = (e) => {
    // 阻止默认行为
    e.preventDefault()
  // 获取用户输入数据
    const { username, content } = this.state;
    //判断
    if (!username || !content) return
    // 添加数据
    this.props.add({username,content,id:this.id++})
    //清空数据
    this.setState({
      username: '',
      content:''
    })
}
  render() {
    const {username,content} =this.state
    return <div className='up'>
      <form>
        <label className='label'>用户名</label><br/>
        <input className='name' type="text" placeholder='用户名' onChange={this.handleComment('username')} value={username}/><br/>
        <label className='label'>评论</label><br/>
        <textarea className='com-content' placeholder="评论内容" onChange={this.handleComment('content')} value={content}></textarea><br/>
        <button type="submit" onClick={this.handleClick}>发表评论</button>
      </form>
    </div>
  }
}