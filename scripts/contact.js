// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

let submitButton = document.getElementById("submit-button");
let contactPage = document.getElementById("contact-page");


function changeStyle(){
    let message = "Thank you for your message";

    //A html element has to be created for applying the CSS.
    let messageElement = document.createElement("span");
    
    //Set the content of created html element with string variable "message"
    messageElement.textContent = message;

    //Set the font size for the created html element
    messageElement.style.fontSize = "24px";
    
    // Clear the inner HTML of the contactPage element
    contactPage.innerHTML = ""; 

    // Append the message element to the contactPage element
    contactPage.appendChild(messageElement); 

    //Alternative way that not to clear the inner HTML & not use.appendChild
    //contactPage.innerHTML = messageElement.outerHTML;
}

submitButton.addEventListener("click",changeStyle);
