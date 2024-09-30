//http://example.com/api/v1/quotes
export async function getWorstCaseBrokenApiQuotes() {
  const apiURL = 'http://example.com/api/v1/quotes';
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}