import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove, increment, update } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-81fcb-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const habitListInDB = ref(database, "habitList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const habitListEl = document.getElementById("habit-list")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    push(habitListInDB, {habit:inputValue, reps: 0})
    
    clearInputFieldEl()
})

onValue(habitListInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
        console.log(itemsArray)
    
        clearhabitListEl()

        itemsArray.map((item)=>{
            appendItemTohabitListEl(item)
            updateRepetitions(item)
        })



    } else {
        habitListEl.innerHTML = "No items here... yet"
    }
})

function clearhabitListEl() {
    habitListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemTohabitListEl(item) {
    let itemID = item[0]
    let itemName = item[1].habit
    let itemValue = item[1].reps
    
    let newEl = document.createElement("li")

    

    newEl.innerHTML = `
        <span class="habit">${itemName}</span>
        <button id="${itemID}" class="repetitions">${itemValue}</button>
        `
    
/*     window[`btn${itemID}`] = document.getElementById("btn"+itemID)
    window[`btn${itemID}`].addEventListener("click", function(){
        itemValue = itemValue + 1
    })
 */
    

    newEl.addEventListener("dblclick", function() {
        let exactLocationOfItemInDB = ref(database, `habitList/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    habitListEl.append(newEl)
}

function updateRepetitions(item){
    let itemID = item[0]
    let itemName = item[1].habit
    let itemValue = item[1].reps

    let btnTemp = document.getElementById(itemID)
    btnTemp.addEventListener("click", function(){
        const updates ={};
        updates[`${itemID}/reps`] = itemValue +1

        update(habitListInDB, updates)
    })

}