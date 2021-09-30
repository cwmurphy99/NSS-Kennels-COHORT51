import React, { useState, useEffect } from 'react';
//import the components we will need
import { QuoteCard } from './QuoteCard';
import { getAllQuotes, getRandomQuote } from '../../modules/QuoteManager';


export const QuoteList = () => {
  // The initial state is an empty array
  const [quotes, setQuotes] = useState([]);
  

  const getQuotes = () => {
    // After the data comes back from the API, we use the setQuotes function to update state
    return getAllQuotes().then(quotesFromAPI => {
      setQuotes(quotesFromAPI)
    });
  };

  // get the Quotes from the API on the component's first render
  useEffect(() => {
    getQuotes();
  }, []);

 
const singleQuote = getRandomQuote(quotes);
  // Finally we use .map() to "loop over" the Quotes array to show a list of Quote cards
  return (
    <div className="quote-cards">
      {quotes.length > 0 ? 
      <QuoteCard quote={singleQuote} /> :
        <p>Loading Quotes</p>
      }
    </div>
  );
};