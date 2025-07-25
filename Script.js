//// Toto je jednořákový komentář
///* Toto je víceřádklový
// komentář*/
//
//
//var firsName = "Kuba";
//console.log(firsName);
//
//var LastName = "Vorel";
//console.log(LastName);
//
//var age = "35";
//console.log(age);
//
//var job = "Designer";
//console.log(job);
//
//// number - číslo
//var age = "35";
//console.log(age);
//// string - text
//var firsName = "Kuba";
//console.log(firsName);
//// boolean - pravda / nepravda
//var adult = true;
//var adult = false;
//console.log(adult);
////undefined - proměnná nemá hodnotu
//var secodnName;
//console.log(secodnName);
//// null - proměná neexistuje
//console.log(test);
//var age2 = 25;
//var age2 = Kuba;
//console.log(age2);

//var firstName = "Kuba";
//var secondName = "Vorel";
//var age = "35";
//console.log("Majitel stránek :" + firstName + " " + secondName + " je mu :" + age );

//alert("Ahoj já jsem Kuba");
//confirm("Jsi plnoletý?");
//var age = prompt("Kolik ti je let");
//console.log(age -18);

/* Základní operátory */

//var ageDavid = 35;
//var ageJana = 20;
//
//if(input = red){
//    console.log("David je starší než Jana");
//}else{ 
//    console.log ("David je mladší než Jana");
//}

//var age =  ("kolik je ti let");
//if (age >=18) {
//    console.log("Jsi plnoletý můžeš vstoupit")
//}else{
//    console.log ("ještě ti nebylo 18")
//}
//
//var ageDavid= 20;
//var ageJana=20;
//
//if(ageDavid > ageJana){
//    console.log ("David je starší než Jana");
//}else if (ageDavid < ageJana){
//     console.log ("David je mladší než Jana");
//    }else if (ageDavid == ageJana){
//        console.log ("David i Jana jsou stějně staří");
//}
var firstnumber = prompt ("zadej první číslo");
var secondnumber = prompt ("zadej druhé číslo");
var sign = prompt ("zadej plus a nebo mínus");
//console.log (firstnumber);
//console.log (secondnumber);
//console.log (sign);
if(sign =="+") {
    console.log (firstnumber+secondnumber);
}else if (sign=="-"){
    console.log (firstnumber - secondnumbert);
}else {
    console.log ("toto neznám");
}

const barvaInput = document.getElementById('barvaInput');
const obrazek = document.getElementById('obrazek');

barvaInput.addEventListener('input', function() {
  const hodnota = barvaInput.value.trim().toLowerCase();

  if (hodnota === 'cervena') {
    obrazek.src = 'images/6.png';
  } else if (hodnota === 'modra') {
    obrazek.src = 'images/7.png';
  	} else if (hodnota === 'zelena') {
    obrazek.src = 'images/8.png';
  } else {
    obrazek.src = 'images/6.png';
  }
    console.log ('images/7.png');
});