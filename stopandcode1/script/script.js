// ecco il codice per "estrarre" un numero random tra 1 e 10:
const numero = Math.floor(Math.random() * 10 + 1);

const min = 1;
const max = 10;
const randomNumber1 = Math.floor(Math.random() * 10 + 1);
const randomNumber2 = Math.floor(Math.random() * 10 + 1);


//const numberUser = prompt("inserisci un numero");

//if (numberUser > randomNumber1) {
  //console.log("hai vinto")
//}
//else {
  //console.log("ritenta")
//}
const message = document.getElementById("message");
const numberUser = document.getElementById("you");
const numberPc = document.getElementById("cpu");
const selectButton = document.getElementById("play-button");
console.log(numberUser);
console.log(numberPc);
console.log(selectButton);

selectButton.addEventListener("click",
function() {
  console.log(you.innerHTML = randomNumber1);
  console.log(cpu.innerHTML = randomNumber2);
}
)

if (randomNumber1 > randomNumber2) {
  console.log(message.innerHTML = "HAI VINTO!");
}
else{
  console.log(message.innerHTML = "NON HAI VINTO!");
}



