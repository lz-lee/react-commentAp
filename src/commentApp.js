import React, {Component} from 'react'
import CommentInput from './commentInput'
import CommentList from './commentList'
import './index.css'

export default class CommentApp extends Component {
  constructor() {
    super()
    this.state = {
      comments: []
    }
  }

  handleSubmitComment = (comment) => {
    if (!comment) return
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
  }

  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment}/>
        <CommentList comments={this.state.comments}/>
      </div>
    )
  }
}