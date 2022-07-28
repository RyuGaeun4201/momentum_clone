const quotes = [
    {
        quote: "God does not care about our mathematical difficulties. He integrates empirically.",
        author: "Albert Einstein",
    },
    {
        quote: "With Heaven's aid I have conquered for you a huge empire. But my life was too short to achieve the conquest of the world. That task is left for you",
        author: "Genghis Khan",
    },
    {
        quote: "The most wasted of all days is one without laughter.",
        author: "E. E. Cummings",
    },
    {
        quote: "The less their ability, the more their conceit.",
        author: "Ahad HaAm",
    },
    {
        quote: "Study the past if you would define the future.",
        author: "Confucius",
    },
    {
        quote: "The superior man is modest in his speech, but excels in his actions.",
        author: "Confucius",
    },
    {
        quote: "Only actions give life strength; only moderation gives it a charm.",
        author: "Jean Paul Richter",
    },
    {
        quote: "Doubt is not a pleasant condition, but certainty is absurd.",
        author: "Voltaire",
    },
    {
        quote: "An investment in knowledge always pays the best interest.",
        author: "Benjamin Franklin",
    },
    {
        quote: "When we are planning for posterity, we ought to remember that virtue is not hereditary.",
        author: "Thomas Paine",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;