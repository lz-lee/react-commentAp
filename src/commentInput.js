import React, {Component} from 'react'

export default class CommentInput extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      content: ''
    }
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
      this.props.onSubmit({username, content})
    }
    this.setState({
      content: ''
    })
  }

  render() {
    return (
      <div className="input-wrapper">
        <div className="input-content">
          <span className="input-name">用户名：</span>
          <div className="input-cont">
            <input type="text" 
                   value={this.state.username}
                   onChange={this.handleUsernameChange}/>
          </div>
        </div>
        <div className="input-content">
          <span className="input-name">评论内容：</span>
          <div className="input-cont">
            <textarea value={this.state.content}
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