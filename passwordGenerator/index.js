const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let generatePasswordBtn = document.getElementById("generatePassword-btn");
let password1 = document.getElementById("pass1");
let password2 = document.getElementById("pass2");

let passLength = document.getElementById("passlen")
passLength.textContent = document.getElementById("volume").value

 document.getElementById("volume").oninput = function() {
 passLength.textContent = this.value;
}


function generatePassword (){
    let len = document.getElementById("volume").value
    let password = ""
    let charactersToUse =[]
    
    let uppercase = document.getElementById("uppercase").checked
    let lowercase = document.getElementById("lowercase").checked
    let numeric = document.getElementById("numeric").checked
    let special = document.getElementById("special").checked
    
    if (uppercase || lowercase || numeric || special){
        if(uppercase){
            charactersToUse.push(...characters.slice(0,26))
        }
        if(lowercase){
            charactersToUse.push(...characters.slice(26,52))
        }
        if(numeric){
            charactersToUse.push(...characters.slice(52,62))
        }
        if(special){
            charactersToUse.push(...characters.slice(62,characters.length))
            }
    } else {
       charactersToUse.push(...characters.slice(0,26))
       document.getElementById("uppercase").checked = true; 
   }
    
    
    
    for (let i=0; i<len; i++){
        password += charactersToUse[Math.floor(Math.random()*charactersToUse.length)]
    }
     return password
}

generatePasswordBtn.addEventListener("click", function(){
    password1.textContent = generatePassword(5);
    password2.textContent = generatePassword(5)
})




function copyDivToClipboard(passid) {
    passEl = document.getElementById(passid).innerText;
    if (passEl !=""){
        var r = document.createRange();
        r.selectNode(document.getElementById(passid));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();

        // Alert the copied text
        alert("Copied the text: " + r);
        }     
    }