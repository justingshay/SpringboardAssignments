// look back at the <readme.md> file for some hints //
// working API key //
const giphyApiKey = "fDPY4IJpY9oQuLQBPO72v611P927n32e";

//testing axios request to giphy
/* axios.get(`http://api.giphy.com/v1/gifs/search?q=dogs&api_key=${giphyApiKey}&limit=10`)
.then((response) => {
    console.log(response);
}); */

//Control and Display variables
const generateGIFsBtn = document.getElementById("generate-GIFs-btn");
const clearGIFsBtn = document.getElementById("clear-GIFs-btn");
const display = document.getElementById("div-display");

//event listeners
generateGIFsBtn.addEventListener("click", generateGIFs);
clearGIFsBtn.addEventListener("click", clearGIFs);

//API request and response
async function getGIFsFromAPI(query) {
    const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${giphyApiKey}&limit=10`);

    return response.data.data.map((val) => {
        return {
            gifURL: val.images.fixed_width.url
        }
    });
}

//get GIF search terms
function getGIFSearchTerms() {
    const searchTerms = document.getElementById("searchGIFs");
    return searchTerms.value;
}

async function generateGIFs(e) {
    e.preventDefault();

    display.innerHTML = "";

    const searchTerms = getGIFSearchTerms();

    const gifsResponse = await getGIFsFromAPI(searchTerms);

    const firstRow = document.createElement("div");
    const secondRow = document.createElement("div");

    firstRow.classList.add("row", "first");
    secondRow.classList.add("row", "second");

    for(let i = 0; i < gifsResponse.length; i++) {
        let image = document.createElement("img");

        image.src = gifsResponse[i].gifURL;

        if(i < 5) {
            firstRow.appendChild(image);
        } else {
            secondRow.appendChild(image);
        }
    }

    display.appendChild(firstRow);
    display.appendChild(secondRow);
}

//clear GIFs
function clearGIFs() {
    display.innerHTML = "";
    display.innerHTML = "... GIF here ...";
}