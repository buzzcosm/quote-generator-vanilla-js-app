export function delay(time) {
  // return new Promise(resolve => setTimeout(resolve, ms));
  // setTimeout((index) => console.log("delay", index), time);
  return new Promise(resolve => setTimeout(resolve, time));
}

export function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getTwitterUrl(text) {
  return `https://twitter.com/intent/tweet?text=${text}`;
}
