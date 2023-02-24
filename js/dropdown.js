console.log("jeg er i dropdown")
const fruits = []

// vi laver objekter og ligger den ned i arrayet med push
fruits.push({"name":"æble", "style":"fruit"})
fruits.push({"name": "pære", "style" : "fruit"})
fruits.push({"name": "peanut", "style" : "notfruit"})
fruits.push({"name": "appelsin", "style" : "fruit"})

console.log(fruits)

const pbFillDropDown = document.getElementById("pbFillDropDown")
const ddFruits = document.getElementById("ddFruits")

function addFruitToDropDown(item) {
    console.log(item)
    const el = document.createElement("option")
    el.textContent = item.name
    ddFruits.appendChild(el)
}

function fillDropDown() {
    fruits.forEach(addFruitToDropDown)
}

pbFillDropDown.addEventListener('click', fillDropDown)


