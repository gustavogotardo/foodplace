let dishPrice,
    drinkPrice,
    dessertPrice,
    dishName,
    drinkName,
    dessertName,
    totalPrice;


function toggleSelectedDish(clickedChoice, type) {
    type = "." + type;
    const choice = document.querySelector(type).querySelector(".selectedChoice");
    console.log(choice)
    if (choice !== null) {
        choice.classList.toggle("selectedChoice");
    }    
    clickedChoice.classList.toggle("selectedChoice");
    activateOrderButton();
}

function toggleSelectedDrink(clickedChoice, type) {
    type = "." + type;
    const choice = document.querySelector(type).querySelector(".selectedChoice");
    console.log(choice)
    if (choice !== null) {
        choice.classList.toggle("selectedChoice");
    }    
    clickedChoice.classList.toggle("selectedChoice");
    activateOrderButton();
}

function toggleSelectedDessert(clickedChoice, type) {
    type = "." + type;
    const choice = document.querySelector(type).querySelector(".selectedChoice");
    console.log(choice)
    if (choice !== null) {
        choice.classList.toggle("selectedChoice");
    }    
    clickedChoice.classList.toggle("selectedChoice");
    activateOrderButton();
}

function priceInBRL(price) {
    price = price.replace("R$ ", "").replace(",", ".");
    price = Number(price) * 100;
    return price;
}

function activateOrderButton() {

}