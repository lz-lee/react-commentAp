import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'

export default class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func
  }

  static defaultProps = {
    comments: []
  }

  handleDeleteComment = (index) => {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }

  render() {
    const {comments} = this.props
    return (
      <div className="list-wrapper">
        {comments.map((comment, i) => <Comment 
          comment={comment}
          key={i}
          index={i}
          onDeleteComment={this.handleDeleteComment}/>)}
      </div>
    )
  }
}