// 提取commnetInput复用

import React, { Component } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentInput from '../base/commentInput'
import { addComments } from '../reducers/comments'

class CommentInputWrapper extends Component {
  static propTypes = {
    comments: propTypes.array,
    onSubmit: propTypes.func
  }

  constructor() {
    super()
    this.state = {
      username: ''
    }
  }

  componentWillMount() {
    this._loaderUsername()
  }

  handleSubmitComment = (comment) => {
    if (!comment) return
    const {comments} = this.props
    const newComments = [...comments, comment]
    sessionStorage.setItem('comments', JSON.stringify(newComments))
    // 由connect提供props dispatch
    if (this.props.onSubmit) {
      this.props.onSubmit(comment)
    }
  }

  _loaderUsername = () => {
    const username = sessionStorage.getItem('username')
    if (username) {
      this.setState({ username })
    }
  }

  _saveUsername = (username) => {
    sessionStorage.setItem('username', username)
  }

  render() {
    return (
      <CommentInput 
        username={this.state.username}
        onHandleUsernameBlur={this._saveUsername}
        onSubmit={this.handleSubmitComment}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (comments) => {
      dispatch(addComments(comments))
    }
  }
}

CommentInputWrapper = connect(mapStateToProps, mapDispatchToProps)(CommentInputWrapper)

export default CommentInputWrapper