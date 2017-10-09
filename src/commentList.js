import React, {Component} from 'react'
import Comment from './comment'

export default class CommentList extends Component {
  static defaultProps = {
    comments: []
  }
  render() {
    const {comments} = this.props
    return (
      <div className="list-wrapper">
        {comments.map((comment, i) => <Comment comment={comment} key={i}/>)}
      </div>
    )
  }
}