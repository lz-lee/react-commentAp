import React, {Component} from 'react'
import PropTypes from 'prop-types'
import loadData from './loadData'
import CommentInput from './commentInput'
import CommentList from './commentList'
import './index.css'

class CommentApp extends Component {
  static propTypes = {
    data: PropTypes.any,
    saveData: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      comments: props.data
    }
  }

  handleSubmitComment = (comment) => {
    if (!comment) return
    // 违反了state不可直接修改原则
    const comments = this.state.comments
    comments.push(comment)
    this.setState({
      comments: comments
    })
    // HOC 改造
    this.props.saveData(comments)
  }

  handleDeleteComment = (index) => {
    const comments = this.state.comments
    comments.splice(index, 1)
    this.setState({comments})
    // HOC 改造
    this.props.saveData(comments)
  }

  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment}/>
        <CommentList comments={this.state.comments}
                     onDeleteComment={this.handleDeleteComment}/>
      </div>
    )
  }
}

CommentApp = loadData(CommentApp, 'comments')

export default CommentApp