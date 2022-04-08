const { GET_POST_DETAILS, UPDATE_AUTHOR, UPDATE_TEXT } = require('../types')

const initialState = {
  details: {},
  comments: [],
  newComment: {
    author: '',
    text: ''
  }
}

const PostDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_DETAILS:
      return {
        ...state,
        details: action.payload.post,
        comments: action.payload.postComments
      }
    case UPDATE_AUTHOR:
      return {
        ...state,
        newComment: {
          ...state.newComment,
          author: action.payload
        }
      }
    case UPDATE_TEXT:
      return {
        ...state,
        newComment: {
          ...state.newComment,
          text: action.payload
        }
      }
    default:
      return { ...state }
  }
}

export default PostDetailsReducer