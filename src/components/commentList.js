import React, {Component} from 'react'
import propTypes from 'prop-types'
import {connect} from 'react-redux'
import CommentList from '../base/commentList'
import {initComments, deleteComments} from '../reducers/comments'

class CommentListWrapper extends Component {
  static propTypes = {
    comments: propTypes.array,
    initComments: propTypes.func,
    deleteComments: propTypes.func
  }

  componentWillMount() {
    this._loadComments()
  }

  handleDeleteComment(index) {
    const {comments} = this.props
    // props是不能修改的,返回新的列表
    const newComments = [
      ...comments.slice(0, index),
      ...comments.slice(index + 1)
    ]
    sessionStorage.setItem('comments', JSON.stringify(newComments))
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }

  _loadComments = () => {
    let comments = sessionStorage.getItem('comments')
    comments = comments ? JSON.parse(comments) : []
    //  初始化
    this.props.initComments(comments)
  }

  render() {
    return (
      <CommentList
        comments={this.props.comments}
        onDeleteComment={this.handleDeleteComment}/>
    )
  }
}

const mapStateToProps = (state,) => {
  return {
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initComments: (comments) => {
      dispatch(initComments(comments))
    },
    onDeleteComment: (index) => {
      dispatch(deleteComments(index))
    }
  }
}

// 提取commentList子组件
CommentListWrapper = connect(mapStateToProps, mapDispatchToProps)(CommentList)

export default CommentListWrapper