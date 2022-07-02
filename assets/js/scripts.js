let dishPrice,
    drinkPrice,
    dessertPrice,
    dishName,
    drinkName,
    dessertName,
    totalPrice;


function toggleSelectedChoice(clickedChoice, type) {
    type = "." + type;
    const choice = document.querySelector(type).querySelector(".selectedChoice");
    console.log(choice)
    if (!clickedChoice.classList.contains("selectedChoice")) {
        if (choice !== null) {
            choice.classList.toggle("selectedChoice");
        }    
        clickedChoice.classList.toggle("selectedChoice");
    }

    else {
        clickedChoice.classList.toggle("selectedChoice");
    }
    
}

function priceInBRL(price) {
    price = price.replace("R$ ", "").replace(",", ".");
    price = Number(price) * 100;
    return price;
}

function selectDish()