import axios from 'axios';
import { quotesActions } from './quotes-slice';
import { apiUrl } from '../components/helpers/api';

export const fetchQuotes = () => {
  return (dispatch) => {
    axios.get(apiUrl + '/quotes.json')
      .then((response) => {
        const quoteObjects = response.data;
        const keys = Object.keys(response.data);
        const transformedQuotes = keys.map(key => {
          return {
            id: key,
            author: quoteObjects[key].author,
            text: quoteObjects[key].text,
          }
        });
        console.log(transformedQuotes);
        dispatch(quotesActions.loadQuotes(transformedQuotes));
        dispatch(quotesActions.setLoadingEnd());
      })
      .catch((err) => {
        console.log(err);
        dispatch(quotesActions.setLoadingEnd());
      });
    
  }
};

export const postQuote = (quoteData) => {
  
  return (dispatch) => {
    dispatch(quotesActions.setLoadingStart())
    axios.post(apiUrl + '/quotes.json', quoteData)
      .then((response) => {
        const quoteToAdd = {
          id: response.data.name,
          author: quoteData.author,
          text: quoteData.text,
        };
        dispatch(quotesActions.addQuote(quoteToAdd));
        dispatch(quotesActions.setLoadingEnd())
      }).catch((err) => {
        dispatch(quotesActions.setLoadingEnd())
        console.log(err);
      })
  }
}