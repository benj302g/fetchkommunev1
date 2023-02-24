console.log("Start test promise")

function returnPromise() {
    //  Promise metoden tager 1 parameter som er en function med 2 parametre.
    return new Promise(function(resolve, reject) {
        resolve("start of new Promise")
    })
}

function test() {
    returnPromise().then((value) => {
        console.log("1st then, inside test():" + value)
        return "Hello"
    }).then((value) => {
        console.log("2nd then, inside test():" + value)
        return "World"
    })
}


test().then((value) => {
    console.log("3rd then, Test er færdig, vi fortsætter" + value)
})



console.log("Slut med test")