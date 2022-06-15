

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