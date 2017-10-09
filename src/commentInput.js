import React, {Component} from 'react'

export default class CommentInput extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      content: ''
    }
  }
  handleUsernameBlur = (e) => {
    this._saveUsername(e.target.value)
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleContentChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  
  handleSubmit = () => {
    if (this.props.onSubmit) {
      const {username, content} = this.state
      this.props.onSubmit({
        username,
        content,
        createTime: +new Date()
      })
    }
    this.setState({
      content: ''
    })
  }

  // 将要挂载获取数据， 相当于vue 的created
  componentWillMount() {
    this._loaderUsername()  
  }

  // 挂载完可以获取dom元素，相当于vue 的 mounted
  componentDidMount() {
    this.textarea.focus()
  }

  _loaderUsername() {
    const username = sessionStorage.getItem('username')
    if (username) {
      this.setState({
        username: username
      })
    }
  }

  _saveUsername(username) {
    sessionStorage.setItem('username', username)
  }

  render() {
    return (
      <div className="input-wrapper">
        <div className="input-content">
          <span className="input-name">用户名：</span>
          <div className="input-cont">
            <input type="text" 
                   value={this.state.username}
                   onBlur={this.handleUsernameBlur}
                   onChange={this.handleUsernameChange}/>
          </div>
        </div>
        <div className="input-content">
          <span className="input-name">评论内容：</span>
          <div className="input-cont">
            <textarea ref={(textarea) => this.textarea = textarea}
                      value={this.state.content}
                      onChange={this.handleContentChange}/>
          </div>
        </div>
        <div className="input-button">
          <button onClick={this.handleSubmit}>发布</button>
        </div>
      </div>
    )
  }
}