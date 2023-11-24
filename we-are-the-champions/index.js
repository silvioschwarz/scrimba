import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-81fcb-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsementInDB = ref(database, "endorsement")

const inputFieldEl = document.getElementById("input-field")
const inputFromEL = document.getElementById("from")
const inputToEl = document.getElementById("to")

const addButtonEl = document.getElementById("add-button")
const endorsementListEl = document.getElementById("endorsement-list")

addButtonEl.addEventListener("click", function() {
    let now = new Date().toISOString().slice(0, 19).replace("T", " ")
    let inputValue = [inputFieldEl.value, inputFromEL.value, inputToEl.value, now]
    console.log(now)
    push(endorsementInDB, inputValue)
    
    clearInputFieldEl()
})

onValue(endorsementInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearendorsementEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToendorsementEl(currentItem)
        }    
    } else {
        endorsementListEl.innerHTML = "No items here... yet"
    }
})

function clearendorsementEl() {
    endorsementListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToendorsementEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("li")
    
    newEl.innerHTML = `${itemValue[3]}<h3>To: ${itemValue[2]}</h3>${itemValue[0]}<h3>From: ${itemValue[1]}</h3>`
    
    newEl.addEventListener("click", function() {
        let exactLocationOfItemInDB = ref(database, `endorsement/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    endorsementListEl.append(newEl)
}