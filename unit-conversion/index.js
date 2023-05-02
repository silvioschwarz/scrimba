/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const input = document.getElementById("input")
const main = document.getElementById("main")

const btn = document.getElementById("convert-btn")

btn.addEventListener("click", ()=>{
    //console.log(input.value)
    main.innerHTML = ""
    conversionDiv("Length (Meters/Feet)", `${input.value} m = ${meterToFeet(input.value)} ft // ${input.value} ft = ${feetToMeter(input.value)} m`)
    
    conversionDiv("Volume (Liters/Gallons)", `${input.value} l = ${literToGallon(input.value)} gallons // ${input.value} gallons = ${feetToMeter(input.value)} l`)
    
    conversionDiv("Mass (Kilograms/Pounds)", `${input.value} kg = ${kilogramToPound(input.value)} lbs // ${input.value} lbs = ${poundToKilogram(input.value)} kg`)
})

function conversionDiv(desc, conv){
    main.innerHTML += `
    <div>
        <h2>
            ${desc}
        </h2>
        <h3>
            ${conv}
        </h3>
    </div>`
}

function meterToFeet(meter){
    return (meter * 3.281).toFixed(3)
}

function feetToMeter(feet){
    return (feet / 3.281).toFixed(3)
}

function literToGallon(liter){
    return (liter * 0.264).toFixed(3)
}

function gallonToLiter(gallon){
    return (gallon / 0.264).toFixed(3)
}

function kilogramToPound(kilogram){
    return (kilogram * 2.204).toFixed(3)
}

function poundToKilogram(pound){
    return (pound / 2.204).toFixed(3)
}

