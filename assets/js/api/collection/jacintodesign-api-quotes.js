export async function getJacintodesignApiQuotes() {
  const apiURL = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Whoops, no quote', error.message);
  }
}