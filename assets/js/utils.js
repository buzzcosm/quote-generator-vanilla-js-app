export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getTwitterUrl(text) {
  return `https://twitter.com/intent/tweet?text=${text}`;
}
