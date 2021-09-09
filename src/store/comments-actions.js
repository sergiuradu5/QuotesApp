import axios from 'axios';
import { commentsActions } from './comments-slice';
import { apiUrl } from '../components/helpers/api';

export const fetchComments = (quoteId) => {
  return (dispatch) => {
    dispatch(commentsActions.setLoadingStart());
    dispatch(commentsActions.clearComments());
    

    axios.get(apiUrl + '/comments/' + quoteId + '.json')
      .then((response) => {
        const comments = response.data;
        console.log(comments);
        const transformedComments = [];
        for (const key in comments) {
          transformedComments.push({
            id: key,
            text: comments[key].text,
          });
        }
        dispatch(commentsActions.loadComments(transformedComments));
        dispatch(commentsActions.setLoadingEnd());
      }).catch(err => {
        console.log(err);
        dispatch(commentsActions.setLoadingEnd());
      })
  }
};

export const postComment = (quoteId, comment) => {
  return (dispatch) => {
  axios.post(apiUrl + '/comments/' + quoteId + '.json', comment)
    .then(response => {
      const commentToAdd = {
        id: response.data.name,
        text: comment.text
      }
      dispatch(commentsActions.addComment(commentToAdd));
    }).catch(err => {
      console.log(err);
    })
  }
};
