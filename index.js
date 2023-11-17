let saveEl1 = document.getElementById("save-el1")
let countEl1 = document.getElementById("count-el1")
let count1 = 0

let saveEl2 = document.getElementById("save-el2")
let countEl2 = document.getElementById("count-el2")
let count2 = 0

function increment1() {
    count1 += 1
    countEl1.textContent = count1
}

function save1() {
    let countStr = count1 + " - "
    saveEl1.textContent += countStr
    countEl1.textContent = 0
    count1 = 0
}

function increment2() {
    count2 += 1
    countEl2.textContent = count2
}

function save2() {
    let countStr = count2 + " - "
    saveEl2.textContent += countStr
    countEl2.textContent = 0
    count2 = 0
}
