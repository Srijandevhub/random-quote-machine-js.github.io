var quote = document.querySelector(".quote");
var author = document.getElementById("author");
var newQuote = document.querySelector(".new-quote");
var sound = document.querySelector(".sound");
var copy = document.querySelector(".copy");

function quoteGenerator() {
    newQuote.classList.add("loading");
    newQuote.innerText = "Loading quote...";
    var alert = "Something went wrong";
    var fetchPromise = fetch("https://api.quotable.io/random");

    fetchPromise.then((data) => {
        return data.json();
    }).then((data) => {
        quote.innerText = data.content;
        author.innerText = data.author;
        newQuote.innerText = "New Quote";
        newQuote.classList.remove("loading");
    }).catch((error) => {
        alert(error);
    });
}
newQuote.addEventListener("click", quoteGenerator);

sound.addEventListener("click", () => {
    var utter = new SpeechSynthesisUtterance(`${quote.innerText} by ${author.innerText}`);
    speechSynthesis.speak(utter);
});

copy.addEventListener("click", () => {
    navigator.clipboard.writeText(quote.innerText);
});