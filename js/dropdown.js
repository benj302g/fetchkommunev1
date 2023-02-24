console.log("jeg er i dropdown")
const fruits = []

// vi laver objekter og ligger den ned i arrayet med push
fruits.push({"id" : 1, "name":"æble", "style":"fruit"})
fruits.push({"id" : 2, "name": "pære", "style" : "fruit"})
fruits.push({"id" : 3, "name": "peanut", "style" : "nut"})
fruits.push({"id" : 4, "name": "appelsin", "style" : "fruit"})

console.log(fruits)

const pbFillDropDown = document.getElementById("pbFillDropDown")
const ddFruits = document.getElementById("ddFruits")

function addFruitToDropDown(item) {
    console.log(item)
    // vi laver en option og siger den skal have værdien item.name
    const el = document.createElement("option")
    el.textContent = item.name
    // vi adder så det element til vores select box ddFruits i html
    ddFruits.appendChild(el)
    // her putter vi primary key ned i value
    // el.value = item.id

    el.value = item
}

function fillDropDown() {
    fruits.forEach(addFruitToDropDown)
}

function selectFruit() {
    // Vi finder index på den option vi har valgt i vores ddFruit selected list
    const selIndex = ddFruits.selectedIndex
    // Så finder vi frugten i vores options array via indexet ovenover.
    const selectedFruit = ddFruits.options[selIndex]
    console.log(selIndex)
    console.log(selectedFruit)
    console.log(selectedFruit.value)
}

pbFillDropDown.addEventListener('click', fillDropDown)
ddFruits.addEventListener('change', selectFruit)


