console.log("Vi er i fetchKommuner")

const urlKommuner = "https://api.dataforsyningen.dk/kommuner"

function fetchKommuner() {
    console.log("2222 fetch kommune")
    return fetch(urlKommuner).then((response) => {
        console.log("4444 start på json")
        response.json()})

    // det virker ikke lige nu vi har bare lavet en masse logs for at vise rækkefølgen som ting sker i
}

function actionFetch() {
    console.log("1111 action fetch")
    const kommuner = fetchKommuner()
    console.log("3333 done fetch kommuner")
    console.log(kommuner)
}

const pbFetchKommuner = document.getElementById("pbFetchKommuner")
pbFetchKommuner.addEventListener('click', actionFetch)
