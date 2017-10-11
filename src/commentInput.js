import React, {Component} from 'react'
import PropTypes from 'prop-types'
import loadData from './loadData'

class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    data: PropTypes.any,
    saveData: PropTypes.func.isRequired
  }

  static defaultProps = {
    data: ''
  }

  constructor(props) {
    super(props)
    this.state = {
      username: props.data || '',
      content: ''
    }
  }
  handleUsernameBlur = (e) => {
    // this._saveUsername(e.target.value)
    this.props.saveData(e.target.value)
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

  // 挂载完可以获取dom元素，相当于vue 的 mounted
  componentDidMount() {
    this.textarea.focus()
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

CommentInput = loadData(CommentInput, 'name')

export default CommentInput