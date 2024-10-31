const baseURL = "https://deckofcardsapi.com/api/deck";

//1
function drawSingleCard() {
    //clear display
    document.getElementById("singleCard").innerHTML = "";

    //shuffle a new deck
    $.getJSON(`${baseURL}/new/shuffle/`).then(data => {
        let deckId = data.deck_id;
        console.log(data);
        //draw a card
        return $.getJSON(`${baseURL}/${deckId}/draw`);
    }).then(data => {
        let value = data.cards[0].value;
        let suit = data.cards[0].suit;
        //display
        document.getElementById("singleCard").innerHTML = (`Your card: ${value} of ${suit}`);
        console.log(`${value} of ${suit}`);
    });
}

//2
function drawTwoCards() {
    //clear display
    document.getElementById("multiCards").innerHTML = "";

    let firstCard = null;
    let secondCard = null;
    let deckId = null;

    //shuffle a new deck
    $.getJSON(`${baseURL}/new/shuffle/`).then(data => {
        deckId = data.deck_id;
        //draw card
        return $.getJSON(`${baseURL}/${deckId}/draw`);
    }).then(data => {
        firstCard = data.cards[0];
        //draw second card
        return $.getJSON(`${baseURL}/${deckId}/draw`);
    }).then(data => {
        let secondCard = data.cards[0];
        [firstCard, secondCard].forEach(function(card) {
            document.getElementById("multiCards").innerHTML += `${card.value} of ${card.suit}<br>`;
            console.log(`${card.value} of ${card.suit}`);
        });
    });
}

//3
let deckId = null;
let cardSpace = $('#everyCard');
//establish deck before function
$.getJSON(`${baseURL}/new/shuffle/`).then(data => {
    deckId = data.deck_id;
    console.log(`Deck ${deckId} opened and shuffled.\nCards remaining: ${data.remaining}`);
})
function drawEveryCard() {
    //draw a card
    $.getJSON(`${baseURL}/${deckId}/draw/`).then(data => {
        console.log(data);
        let cardImg = data.cards[0].image;
        cardSpace.append($('<img>', { src: cardImg, alt: data.cards[0].value + " of " + data.cards[0].suit }));
        console.log(`${data.cards[0].value} of ${data.cards[0].suit}\nCards remaining: ${data.remaining}`);
    })
}