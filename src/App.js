import { useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';

import Layout from './components/layout/Layout';
import AddQuote from "./pages/AddQuote";
import QuoteDetail from "./pages/QuoteDetail";
import Quotes from "./pages/Quotes";
import NotFound from "./pages/NotFound";
import { fetchQuotes } from './store/quotes-actions';
import LoadingSpinner from './components/UI/LoadingSpinner';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.quotes.isLoading);

  useEffect(() => {
    console.log('Is Initial? ', isInitial);
    if (isInitial) {
      dispatch(fetchQuotes());
      isInitial = false;
    }
  }, [dispatch]);

  console.log('Is Loading? ', isLoading);

  return (
    <Layout>
      {isLoading && <div className="centered">
        <LoadingSpinner />
      </div>
      }
      {!isLoading && (
        <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>

        <Route path="/quotes" exact>
          <Quotes />
        </Route>

        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>

        <Route path="/add-quote">
          <AddQuote />
        </Route>

        <Route path="*" >
          <NotFound />
        </Route>
      </Switch>
      )}
          </Layout>
  );
}

export default App;
