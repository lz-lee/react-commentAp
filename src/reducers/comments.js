const INIT_COMMENTS = 'INIT_COMMENTS'
const ADD_COMMENTS = 'ADD_COMMENTS'
const DELETE_COMMENTS = 'DELETE_COMMENTS'

// reducer
export default function(state, action) {
  if (!state) {
    state = {comments: []}
  }

  switch (action.type) {
    case INIT_COMMENTS:
        return {comments: action.comments}
    case ADD_COMMENTS: 
      return {
        comments: [...state.comments, action.comments]
      }
    case DELETE_COMMENTS:
      return {
        comments: [
          ...state.comments.slice(0, action.commentIndex),
          ...state.comments.slice(action.commentIndex + 1)
        ]
      }
    default:
      return state
  }
}

export const initComments = (comments) => {
  return {type: INIT_COMMENTS, comments}
}

export const addComments = (comments) => {
  return {type: ADD_COMMENTS, comments}
}

export const deleteComments = (comments) => {
  return {type: DELETE_COMMENTS, comments}
}