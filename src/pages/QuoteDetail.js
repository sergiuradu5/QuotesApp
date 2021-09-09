import React from "react";
import { useSelector } from 'react-redux';
import { Route, useParams, useHistory, useRouteMatch } from "react-router";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import BackButton from "../components/UI/BackButton";

const QuoteDetail = () => {
  const params = useParams();
  const history = useHistory();
  const match = useRouteMatch();
  const quoteToPassAsProp = useSelector(state => state.quotes.quotes.find(quote => quote.id === params.quoteId));

  if (!quoteToPassAsProp) {
    return <p>No quote found!</p>;
  }

  const showCommentsHandler = () => {
    history.replace(`${match.url}/comments`);
  };

  return (
    <>
      <BackButton />
      <HighlightedQuote
        author={quoteToPassAsProp.author}
        text={quoteToPassAsProp.text}
      />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <button className="btn--flat" onClick={showCommentsHandler}>
            Load Comments
          </button>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments quoteId={params.quoteId}/>
      </Route>
    </>
  );
};

export default QuoteDetail;
