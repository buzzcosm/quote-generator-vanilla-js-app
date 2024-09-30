export async function getJacintodesignApiQuotes() {
  const apiURL = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data.map(quoteObj => ({
      text: quoteObj.text,
      author: quoteObj.author
    }));
  } catch (error) {
    console.log(error);
  }
}