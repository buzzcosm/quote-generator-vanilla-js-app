// import { api } from "./api/index.js";
import * as apis from "./api/index.js";
import * as utils from "./utils.js";

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById('loader');

const delay = 500;
const quotes = await apis.getLocalQuotes();
// const quotes = await apis.getJacintodesignApiQuotes();
// const quotes = await apis.getDummyjsonApiQuotes();

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
  if (!loader.hidden) {
    quoteContainer.hidden = false;
    loader.hidden = true;
  }
}

async function renderQuote() {
  showLoadingSpinner();
  // delay for spinning loader test
  await utils.sleep(delay);
  const { text, author } = utils.getRandomElement(quotes);
  // Check Quote length to determine styling
  if (text.length > 120) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
  quoteText.textContent = text;
  authorText.textContent = author || "Unknown";
  removeLoadingSpinner();
}

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}

// event listeners
newQuoteBtn.addEventListener("click", renderQuote);
twitterBtn.addEventListener('click', tweetQuote);

// on load
renderQuote();