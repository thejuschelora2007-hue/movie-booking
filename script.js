 // Ticket Price Calculator

const seatInput = document.getElementById("seat");
const total = document.getElementById("total");

if(seatInput && total){

function calculate(){

let seats = parseInt(seatInput.value);

if(isNaN(seats) || seats < 1){
    seats = 1;
}

if(seats > 10){
    seats = 10;
    seatInput.value = 10;
}

total.innerHTML = seats * 200;

}

seatInput.addEventListener("input",calculate);

calculate();

}


// Booking Form

const form = document.querySelector(".booking form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("🎉 Booking Successful!\n\nThank you for booking with CineBook.");

form.reset();

if(total){
    total.innerHTML = "200";
}

});

}


// Movie Select Buttons

const buttons = document.querySelectorAll(".movie button");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

const movie = button.parentElement.querySelector("h2").innerText;

const select = document.querySelector("select");

if(select){

select.value = movie.includes("Avatar")
? "Avatar"
: movie.includes("Batman")
? "Batman"
: movie.includes("Spider")
? "Spider Man"
: "Avengers";

window.scrollTo({

top:document.querySelector(".booking").offsetTop-60,
behavior:"smooth"

});

}

});

});