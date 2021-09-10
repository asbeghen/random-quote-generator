/******************************************
 Treehouse FSJS Techdegree:
 project 1 - A Random Quote Generator

 Student: Amanda Sbeghen
 ******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * Global variables
 *
 * previousRandomNumber - Allows for random number check when printing quotes. Used to avoid printing the same quote twice in a row
 ***/
let previousRandomNumber = 0;

/***
 * `quotes` array
 *
 * List of quotes with their sources, citations, year and tag(s)
 ***/
const quotes = [
  {
    quote: 'There never was a child so lovely but his mother was glad to get him asleep.',
    source: 'Ralph Waldo Emerson',
    tags: ['love', 'children']
  },
  {
    quote: 'Luck is what you have left over after you give 100 percent.',
    source: 'Langston Coleman'
  },
  {
    quote: 'Everything that is created begins in the mind',
    source: 'Fishel, Ruth',
    citation: 'Learning to Live in the Now Health Communications, Inc.Deerfield Beach, Florida, p. 32',
    year: 1988
  },
  {
    quote: 'Subconscious mind does exactly what the conscious mind tells it to do',
    source: 'Anderson',
    citation: 'Three Magic Words. No. Hollywood, CA: Melvin Powers/Wilshire Book Company, p. 18',
    year: 1954,
    tags: ['mind']
  },
  {
    quote: 'think whatever makes you truly happy to think',
    source: 'Jampolsky, Gerold G. M.D.',
    citation: 'Teach Only Love. NY Bantom Books, p 68',
    year: 1983
  }
];

/***
 * `getRandomQuote` function
 *
 * Sets a random number to return a random quote from the 'quotes' array - also assures the same quote isn't printed twice in a row
 ***/
const getRandomQuote = () => {
  let randomNumber;

  do {
    randomNumber = Math.floor(Math.random() * quotes.length);
  } while (randomNumber === previousRandomNumber)

  previousRandomNumber = randomNumber;

  return quotes[randomNumber];
};

/***
 * `randomizeBackgroundColor` function
 *
 * randomizes background color when printing different quotes
 ***/
const randomizeBackgroundColor = () => {
  const randomColorValue = () => Math.floor(Math.random() * 256);

  const randomRGBColors = (color) => {
    const rgbColor = `rgb(${color()},${color()},${color()})`;
    return rgbColor;
  }

  document.body.style.background = randomRGBColors(randomColorValue);
};

/***
 * `printQuote` function
 *
 * Prints out all the information to display a quote and its information
 ***/
const printQuote = () => {
  randomizeBackgroundColor();

  const randomQuote = getRandomQuote();
  let html = `<p class="quote"> ${randomQuote.quote}</p><p class="source"> ${randomQuote.source}`

  if (randomQuote.citation) {
    html = html + `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    html = html + `<span class="year">${randomQuote.year}</span>`;
  }
  if (randomQuote.tags) {
    html = html + `<span class="tags"> ~ ${randomQuote.tags.join(', ')}</span>`;
  }

  html = html + '</p>';

  document.getElementById('quote-box').innerHTML = html;

  return html;
};

/***
 * `setInterval`
 *
 * This will refresh the quotes every 10 seconds
 ***/
setInterval(() => printQuote(), 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);