const remoteURL = "https://type.fit/api/"

// export const getQuotes = () => {
//   //be sure your animals have good data and related to a location and customer
//   return fetch(`${remoteURL}/quotes`)
//   .then(arr => arr.json())
// }


export const getAllQuotes = () => {
  return fetch(`${remoteURL}/quotes`)
  .then(res => res.json())
}

export const getRandomQuote = (arr) => {
  //get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  //get random item
  const singleQuote = arr[randomIndex];

  return singleQuote;
}