console.log("Vi er i fetchKommuner")
const urlKommuner = "https://api.dataforsyningen.dk/kommuner"


function fetchKommuner(url) {
    console.log(url)
    return fetch(url).then((response) => response.json())
}

const ddKommuner = document.getElementById("ddKommuner")

function fillKommuneDropDown(kommune){
    const el = document.createElement("option")
    el.textContent = kommune.navn
    // vi adder så det element til vores select box ddKommuner i html
    ddKommuner.appendChild(el)
}


async function showAllKommuner(){
    const kommuneList = await fetchKommuner(urlKommuner);
    console.log(kommuneList)
    //fillKommuneDropdown må IKKE have paranteser med, så gakker den.
    kommuneList.forEach(fillKommuneDropDown)
}

function actionShowKommuner() {
    showAllKommuner()
}

const pbFetchKommuner = document.getElementById("pbFetchKommuner")
pbFetchKommuner.addEventListener('click', actionShowKommuner)


