import { menuArray } from "./data.js";

const mainDiv = document.getElementById("menu")
const checkoutDiv = document.getElementById("checkout")
const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')

let order = []


document.addEventListener('click', function(e){
    if(e.target.dataset.id){
        handleMenuClick(e.target.dataset.id)
    }
    else if(e.target.dataset.remove){
       order.shift(e.target.dataset.remove)
        render()
    }
    else if(e.target.id === "checkout-btn"){
        modal.style.display = 'inline'
    }
})


function handleMenuClick(menuID){

    const targetMenuObj = menuArray.filter((item)=>{
        return item.id === Number(menuID)
    })[0]
   
    /*menuArray[menuID].quantity = 1*/

    order.unshift(targetMenuObj)

    render()
}


function getMenuHtml(){
    let menu =""

    menuArray.forEach((item)=>{

        menu += `
        <div class="item-container">
        <div class="item">
            <div class="item-emoji">
                ${item.emoji}
            </div>
            <div class="item-info">
                <div class="item-title">
                ${item.name}
                </div>
                <div class="item-ingredients">
                ${item.ingredients.join(", ")}
                </div>
                <div class="item-price">        
                    $${item.price}
                </div>
            </div>
            <div>
                <button class="add-btn" type="button" data-id=${item.id}></button>
            </div>
        </div>
        <div>
            <hr>
        </div>
    </div>
        
        `

    })

    return menu
}

function getCheckOutHtml(){
    let checkoutHtml = ""
    let total = 0

    if(order.length > 0){
        checkoutHtml  = '<h1>Your Order</h1>'

        order.forEach((item, index)=>{
            checkoutHtml += `
            <div class="checkout-row">
                <div class="checkout-row">
                    <div class="checkout-item">${item.name}</div> 
                    <button class="checkout-remove-btn" data-remove=${index}>remove</button>
                </div>
            <div class="checkout-price">$${item.price}</div>
            </div>
            
        </div>        
            `
            total += item.price /* order[item.id]*/
        })

        checkoutHtml += `<hr>
    <div class="checkout-total">
        <div class="total">Total price:</div>
        <div class="checkout-price">$${total}</div>
    </div>`

    checkoutHtml  += '<button class="checkout-btn"  id="checkout-btn">Complete order</button>'
    }

    return checkoutHtml

}

function render(){
    mainDiv.innerHTML = getMenuHtml()
    
    checkoutDiv.innerHTML = getCheckOutHtml()
    
}

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'

    const consentFormData = new FormData(consentForm)
    const fullName = consentFormData.get('fullName')

    checkoutDiv.innerHTML = `
    <div class="goodbye">
        Thanks, ${fullName}! Your order is on its way!
    </div
    `
}) 

consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    
    const consentFormData = new FormData(consentForm)
    const fullName = consentFormData.get('fullName')
    
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="assets/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>` 
    
    setTimeout(function(){
        document.getElementById('upload-text').innerText = `
        Making the sale...`
    }, 1500)
    
    
    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="assets/pirate.gif">
        </div>
    `
    modalCloseBtn.disabled = false
    }, 3000)
  
}) 

render()