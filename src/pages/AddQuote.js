import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import { useDispatch  } from "react-redux";
import { postQuote } from "../store/quotes-actions";
const AddQuote = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const addQuoteHandler = (formData) => {
    dispatch(postQuote(formData));
    history.push('/quotes');
  }

  return (
    <>
      <h1 className="centered">Add a quote</h1>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </>
  );
};

export default AddQuote;
