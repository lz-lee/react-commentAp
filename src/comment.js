import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func,
    index: PropTypes.number
  }

  constructor() {
    super()
    this.state = {
      timeString: ''
    }
  }

  handleDeleteComment = () => {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index)
    }
  }

  componentWillMount() {
    this._updateTimeString()
    this._timer = setInterval(() => {
      this._updateTimeString()
    }, 5000)
  }

  // 删除评论 即销毁组件， 需要清楚定时器
  componentWillUnmount() {
    clearInterval(this._timer)
  }

  _updateTimeString() {
    const createTime = this.props.comment.createTime
    const duration = (+Date.now() - createTime) / 1000
    this.setState({
      timeString: duration > 60 ? `${Math.round(duration / 60)} 分钟前` : `${Math.round(Math.max(duration, 1))} 秒前`
    })
  }

  render() {
    return (
      <div className="comment">
        <div className='comment-user'>
          <span>{this.props.comment.username} </span>：
        </div>
        <p>{this.props.comment.content}</p>
        <span className="comment-createdtime">{this.state.timeString}</span>
        <span className="comment-delete"
              onClick={this.handleDeleteComment}>删除</span>
      </div>
    )
  }
}