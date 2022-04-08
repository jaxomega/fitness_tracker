import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import CreateCommentForm from './CreateCommentForm'
import { LoadPostDetails, UpdateCommentAuthor, UpdateCommentText } from '../store/actions/PostActions'
// import { process_params } from 'express/lib/router'

const mapStateToProps = ({ postDetailsState }) => {
  return { postDetailsState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostDetails: (id) => dispatch(LoadPostDetails(id)),
    updateCommentAuthor: (authorName) => dispatch(UpdateCommentAuthor(authorName)),
    updateCommentText: (commentText) => dispatch(UpdateCommentText(commentText))
  }
}

const PostDetails = (props) => {
  let { id } = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])

  // const getPostData = async () => {
  //   const response = await axios.get(`http://localhost:3001/posts/${id}`)
  //   console.log('RESPONSE FROM GET POST DATA:', response)
  //   setPost(response.data.post)
  //   setComments(response.data.postComments)
  // }

  // useEffect(() => {
  //   getPostData()
  // }, [])

  useEffect(() => {
    props.fetchPostDetails(id)
  }, [id])

  // const createComment = async (event) => {
  //   event.preventDefault()
  //   await axios
  //     .post('http://localhost:3001/comments', newComment)
  //     .then(function (response) {
  //       getPostData()
  //     })
  //     .catch(function (error) {
  //       console.log(error)
  //     })
  //   setNewComment({
  //     author: '',
  //     text: '',
  //     post: id
  //   })
  // }
  console.log('props.postDetailsState:', props.postDetailsState)
  const details = props.postDetailsState.details
  console.log('DETAILS:', details)
  const commentsArray = props.postDetailsState.comments
  console.log('COMMENTS:', commentsArray)

  const handleOnAuthorChange = (event) => {
    props.updateCommentAuthor(event.target.value)
  }

  const handleOnTextChange = (event) => {
    props.updateCommentText(event.target.value)
  }

  return (
    <div>
      <h2>Post Details Page</h2>
      <form>
        <input
          type="text"
          placeholder="Enter author name..."
          onChange={handleOnAuthorChange}
          value={props.postDetailsState.newComment.author}
        />
        <br />
        <textarea
          placeholder="Enter comment..."
          onChange={handleOnTextChange}
          value={props.postDetailsState.newComment.text}
        />
      </form>
      <div>
        <h3>{details.title}</h3>
        <p><em>{details.content}</em></p>
        <h3>Comments:</h3>
        {commentsArray.map((comment) => (
          <div key={comment.id}>
            <p><b>Author</b>: {comment.author}</p>
            <p><b>Content</b>: {comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)