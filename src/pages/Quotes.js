import React from 'react'
import QuotesList from '../components/quotes/QuoteList';
import { useSelector } from 'react-redux';
const Quotes = () => {
  const quotes = useSelector(state => state.quotes.quotes);
  return (
    <div>
      <QuotesList quotes={quotes}/>
    </div>
  )
}

export default Quotes
