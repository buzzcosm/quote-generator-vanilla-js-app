/**
  API: https://dummyjson.com/docs/quotes
  API Structure
  [
    {
      "id": 1153,
      "quote": "He who guards his secrets retains control in his own hands.",
      "author": "Ali ibn Abi Talib (R.A)"
    },
  ]
*/
export async function getDummyjsonApiQuotes() {
  const apiURL = 'https://dummyjson.com/quotes/random/10';
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data.map(quoteObj => ({
      text: quoteObj.quote,
      author: quoteObj.author
    }));
  } catch (error) {
    console.log('Whoops, no quote', error.message);
  }
}