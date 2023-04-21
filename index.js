/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn")
let inputTxt = document.getElementById("input-txt")
let len = document.getElementById("len")
let vol = document.getElementById("vol")
let mas = document.getElementById("mas")


convertBtn.addEventListener("click", function() {
    convertInnerHtml (inputTxt.value)
})

function convertInnerHtml (unit) {
    len.textContent = convertLength(unit)
    vol.innerHTML = convertVolume(unit)
    mas.innerHTML = convertMass(unit)

}

function convertLength (unit) {
    return `${unit} meters = ${(Number(unit) * 3.281).toFixed(3)} feet | 
            ${unit} feet = ${(Number(unit) / 3.281).toFixed(3)} meters`
}

function convertVolume (unit) {
    return `${unit} liters = ${(Number(unit) * 0.264).toFixed(3)} Gallons | 
            ${unit} Gallons = ${(Number(unit) / 0.264).toFixed(3)} Liters`
}

function convertMass (unit) {
    return `${unit} Kilos = ${(Number(unit) * 2.204).toFixed(3)} Pounds | 
            ${unit} Pounds = ${(Number(unit) / 2.204).toFixed(3)} Kilos`
}

