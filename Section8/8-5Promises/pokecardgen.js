//baseURL
const baseUrl = "https://pokeapi.co/api/v2/pokemon";

//total # of Pokemon avail: 1025
const largestNumPoke = 1025;

//1
$.getJSON(`${baseUrl}/?limit=1025`).then(data => {
    console.log(data);
});

//2
$.getJSON(`${baseUrl}/?limit=1025`).then(data => {
    let randMonURLs = [];
    for(let i = 0; i < 3; i++) {
        randMonURLs.push(data.results[Math.floor(Math.random() * largestNumPoke)].url);
    }
    return Promise.all(randMonURLs.map(url => $.getJSON(url)));
}).then(data => {
    data.forEach(pokemon => console.log(pokemon));
});

//3
$.getJSON(`${baseUrl}/?limit=1025`).then(data => {
    let randMonURLs = [];
    let names = [];
    for(let i = 0; i < 3; i++) {
        names.push(data.results[Math.floor(Math.random() * largestNumPoke)].name);
    }
    return Promise.all(names.map(name => $.getJSON(`${baseUrl}-species/${name}`)));
}).then(data => {
    data.forEach(pokemon => {
        let flavorText = pokemon.flavor_text_entries.find(entry => entry.language.name === "en");
        if(!flavorText.flavor_text) flavorText.flavor_text = "No description available.";
        console.log(`${pokemon.name}: ${flavorText.flavor_text}`);
    });
});

//4
//Will work on the bonus part 4 when I catch up in progress