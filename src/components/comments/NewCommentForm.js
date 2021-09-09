import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { postComment } from '../../store/comments-actions';
import { useParams } from 'react-router-dom';
import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const dispatch = useDispatch();
  const params = useParams();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const isTextAreaEmpty = commentTextRef.current.value.trim() === '';
    if (isTextAreaEmpty) {
      return;
    }

    const text = commentTextRef.current.value;
    const commentToPost = {
      text
    };

    dispatch(postComment(params.quoteId, commentToPost));
    commentTextRef.current.value = '';
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
