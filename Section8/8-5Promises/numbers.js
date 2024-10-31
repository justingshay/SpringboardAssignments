const baseURL = "http://numbersapi.com";

function favNumberFact() {
    //clear display
    document.getElementById("favResults").innerHTML = "";
    //get num from input
    const favNum = document.getElementById("favNumber").value;
    console.log("Getting a fact for the number: ", favNum);
    $.getJSON(`${baseURL}/${favNum}?json`).then(data => {
        console.log(data.text);
        //display num fact
        document.getElementById("favResults").innerHTML = data.text;
        console.log(data);
      });
}

function rangeNumberFacts() {
    //clear display
    document.getElementById("rangeResults").innerHTML = "";
    //get nums from input
    const rangeNums = document.getElementById("rangeNumbers").value;
    console.log("Getting facts for the numbers: ", rangeNums);
    $.getJSON(`${baseURL}/${rangeNums}?json`).then(data => {
        let results = [];
        for(const [key, value] of Object.entries(data)) {
            console.log(`${value}`);
            //display facts for nums
            document.getElementById("rangeResults").innerHTML += `${value}<br>`;
        }
    });
}

function multiFactsForNumber() {
    //clear display
    document.getElementById("multiResults").innerHTML = "";
    //get num from input
    const multiNum = document.getElementById("multiFacts").value;
    console.log("Getting multiple facts for the number ", multiNum);
    Promise.all(
        Array.from( {length: 4}, () => {
            //query api for num 4x
            return $.getJSON(`${baseURL}/${multiNum}?json`);
        })
    ).then(results => {
        results.forEach(data => {
            console.log(data.text);
            //display num facts
            document.getElementById("multiResults").innerHTML += `${data.text}<br>`;
        })
    })
}