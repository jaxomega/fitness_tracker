import { GetPosts, GetPostDetails } from '../../services/PostServices'
import {
  GET_POSTS,
  GET_POST_DETAILS,
  UPDATE_AUTHOR,
  UPDATE_TEXT
} from '../types'

export const LoadPosts = () => {
  return async (dispatch) => {
    try {
      const posts = await GetPosts()

      dispatch({
        type: GET_POSTS,
        payload: posts
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadPostDetails = (id) => {
  return async (dispatch) => {
    try {
      const PostDetails = await GetPostDetails(id)
      console.log('PostDetails:', PostDetails)

      dispatch({
        type: GET_POST_DETAILS,
        payload: PostDetails
      })
    } catch (error) {
      throw error
    }
  }
}

export const UpdateCommentAuthor = (authorName) => ({
  type: UPDATE_AUTHOR,
  payload: authorName
})

export const UpdateCommentText = (commentText) => ({
  type: UPDATE_TEXT,
  payload: commentText
})

export const SubmitComment = (id) => {
  return async (dispatch) => {
    try {
      const PostDetails = await GetPostDetails(id)
      console.log('PostDetails:', PostDetails)

      dispatch({
        type: GET_POST_DETAILS,
        payload: PostDetails
      })
    } catch (error) {
      throw error
    }
  }
}