var quotes = ["Sometimes the most important thing in a whole day is the rest taken between two deep breaths.",
               "Your mind will answer most questions if you learn to relax and wait for the answer.",
             "ou may not control all the events that happen to you, but you can decide not to be reduced by them."];
 var randomQuote = Math.floor(Math.random()*quotes.length);

 var quoteElement = document.createElement("p");
quoteElement.id = "quote"
quoteElement.innerText = quotes[randomQuote]
document.body.appendChild(quoteElement)


var elem = document.getElementById("#btn-click")

if(elem){
    elem.addEventListener("click", notif);
}
function notif() {
    chrome.notifications.create('test', {
        type: 'basic',
        iconUrl: 'images/1.png',
        title: 'Test Message',
        message: 'You are awesome!',
        priority: 2
    });    
}