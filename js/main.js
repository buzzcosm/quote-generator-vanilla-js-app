import * as quotesApi from "./modules/quotes/api.js";
import * as utils from "./modules/utils.js";

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");
const noQuotes = document.getElementById("no-quotes");

const DELAY_TIME = 1000;

// api request
/////////////////////////////////////////////////////////////
// const quotes = await quotesApi.getLocalApiQuotes();
const quotes = await quotesApi.getJacintodesignApiQuotes();
// const quotes = await quotesApi.getDummyjsonApiQuotes();
// const quotes = await quotesApi.getWorstCaseBrokenApiQuotes();

// spinner

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
  if (!loader.hidden) {
    loader.hidden = true;
    quoteContainer.hidden = false;
  }
}

// renderer

function renderQuotesNotFound() {
  quoteContainer.hidden = true;
  noQuotes.hidden = false;
  noQuotes.textContent = "No quotes found or api is broken!";
}

function renderQuote({ text, author } ) {
  if (text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = text;
  authorText.textContent = author || "Unknown";
}

// actions

async function getNewQuote() {
  showLoadingSpinner();
  await utils.delay(DELAY_TIME); // Only for testing spinner

  if (quotes === undefined || quotes.length == 0) {
    removeLoadingSpinner();
    renderQuotesNotFound();
  } 
  else {
    const newQuote = utils.getRandomElement(quotes);
    removeLoadingSpinner();
    renderQuote(newQuote);
  }
}

function tweetQuote() {
  const tweet = `${quoteText.textContent} - ${authorText.textContent}`;
  const twitterUrl = utils.getTwitterUrl(tweet);
  window.open(twitterUrl, "_blank");
}

// event listeners
newQuoteBtn.addEventListener("click", getNewQuote);
twitterBtn.addEventListener("click", tweetQuote);

// on load
getNewQuote();