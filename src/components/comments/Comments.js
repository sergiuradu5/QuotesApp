import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import CommentsList from "./CommentsList";
import LoadingSpinner from '../UI/LoadingSpinner';
import { commentsActions } from "../../store/comments-slice";
import { fetchComments } from '../../store/comments-actions';

const Comments = (props) => {
  const { quoteId } = props;
  const [isAddingComment, setIsAddingComment] = useState(false);
  const comments = useSelector((state) => state.comments.comments);
  const isLoading = useSelector((state) => state.comments.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments(quoteId))
    return () => {
      dispatch(commentsActions.clearComments());
      dispatch(commentsActions.setLoadingStart());
    }
  }, [dispatch, quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const commentContent =  <section className={classes.comments}>
    <h2>User Comments</h2>
      {comments.lenght > 0} {
        <CommentsList comments={comments} />
      }
      {comments.length === 0 && !isAddingComment && <h4>No comments added yet</h4>}
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm />}
      
    </section>;

  return <>
    {isLoading && <div className="centered"> <LoadingSpinner /> </div>}
    {!isLoading  && commentContent}    
    </>;
};

export default Comments;
