let images = ["dado1.svg",
 "dado2.svg",
 "dado3.svg",
 'dado4.svg',
 'dado5.svg',
 'dado6.svg'];

 let dice = document.querySelectorAll("img");

 function roll(){ 
     let dieOneValue = Math.floor((Math.random()* 6))
     document.querySelector("#faccia1").setAttribute
     ("src", images[dieOneValue])
     document.querySelector('#total').innerHTML =
     "Your roll is " + ((dieOneValue + 1)) + "! Now go outside and make Bologna red again.";
 }
