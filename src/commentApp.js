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
    // 违反了state不可直接修改原则
    const comments = this.state.comments
    comments.push(comment)
    this.setState({
      comments: comments
    })
    this._saveComments(comments)
  }

  handleDeleteComment = (index) => {
    const comments = this.state.comments
    comments.splice(index, 1)
    this.setState({comments})
    this._saveComments(comments)
  }

  componentWillMount() {
    this._loaderComments()
  }
  
  _loaderComments() {
    let comments = sessionStorage.getItem('comments') 
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({comments})
    }
  }

  _saveComments(comments) {
    sessionStorage.setItem('comments', JSON.stringify(comments))
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