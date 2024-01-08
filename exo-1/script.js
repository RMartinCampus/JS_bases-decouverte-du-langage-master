// you can write js here
//console.log('hello from file');
//Pt1
//let kelvins=294;

//Pt2
function kelvinsToCelcius(tKelvin){
    return tKelvin-273;
}
let celcius=kelvinsToCelcius(kelvins);

//Pt3
function celciusToFarenheits(tCelcius){
    return tCelcius*(9/5)+32;
}
let fahrenheits=celciusToFarenheits(celcius);//stock la température celcius convertie en Fahrenheits dans la variable farenheits

//Pt4
//Utilisation de la méthode floor pour tronquer la température en farenheits
fahrenheits=Math.floor(fahrenheits);

//Pt5
var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
function afficheTemp(tKelvin){
    let celcius=kelvinsToCelcius(tKelvin);
    let fahrenheits=celciusToFarenheits(celcius);
    console.log(kelvins +" degrees Kelvins corespond à "+celcius+" degrees Celcius et environ "+fahrenheits+" degrees farenheits.")
}
afficheTemp(kelvins);



