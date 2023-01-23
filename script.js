//PARTIE 2 : VARIABLES 

// Déclaration des variables

var num = 255;
var txt = '255';
var bin = true;
var flt = 7.23;

console.log(num);
console.log(txt);
console.log(bin);
console.log(flt);

// Opération sur les variables 

num++;
console.log(num);

console.log(txt + " est ici une chaîne de caractères");

console.log(!bin);

console.log(flt+num);


// Types des variables 

var num = 23;
var txt = '33';
var tmp = 0;

console.log(tmp = parseInt(txt));
console.log(typeof(tmp));

console.log(num+tmp);


// Partie 3 : Conditions

// Test simple

    // majeur = prompt('Quel âge avez-vous ?');

    // if (majeur.value < 18) {
    //     alert('Vous êtes mineur')
    // } else {
    //     alert('Vous êtes majeur')
    // }


// Test sur la longueur d'une chaîne de caractères


var str = "Bonjour ertzreteztretreyery";

// if (str.length > 10) {
//     console.log('true');
// } else {
//     console.log('false');
// }

function string() {
    if (str.length > 10) {
        return true;
    } else {
        return false;
    }
}

console.log(string());

// Test sur le type des paramètres

function myFct(a, b) {
    
    if (typeof (a) !== 'number' || typeof (b) !== 'number') {
        
        return '-999999999';
    }
    else {
        return a + b
    }
}

const a = '4';
const b = 8;

console.log(typeof(a));
console.log(myFct(a,b));     


// Tests imbriqués

function notes(i) {

    if (i >= 0 && i <= 7) {
        return 'Hideux'
    } else if (i > 7 && i <= 10) {
        return 'Moche'
    } else if (i > 10 && i <= 15) {
        return 'Nice'
    } else if (i > 15 && i <= 20) {
        return 'GG'
    } else {
        return 'BUG'
    }
}

console.log(notes(8));


// Partie 4 : Boucles

// Boucle while avec itérateur

var br = '<br>';

for (let i=0; i < 10; i++) {

    document.write(i + br);
}


// Boucle while sans itérateur


// function boucleWhile() {

// var text = "";
// var result;
// var check = true;

//     while (check == true) {

//         result = prompt()

//         if (result !== "") {

//              text = result ;
//              check = false
//         } 
//     } 

//     return text
    
// }

// console.log(boucleWhile());

// Boucle avec break

// function boucleBreak() {

//     var text = "";
//     var result;
//     var check = true;
    
//         while (check == true) {
    
//             result = prompt()
    
//             if (result !== "") {
    
//                  text = result ;
//                  break
//             } 
//         } 
    
//         return text
        
//     }
//     console.log(boucleBreak());


// Boucle avec continue



    var i = 0;
    var j = 30;
    var limit = 40;

while (i < limit) {
     i++;

    if (i < limit/2) {
        continue
    }
     j++;
}


console.log(i);
console.log(j);

// Partie 5 : Fonctions

// Fonction sans argument

function isoNum() {
    return 42;
}

console.log(isoNum());


// Fonction avec arguments

function myFct2(arg1, arg2) {
    return arg1*arg2 + arg1 + arg2;
}

console.log(myFct2(4,10));

// Partie 6 : Tableaux

// Création d'un tableau

var tablo = [1, 2, 3];
console.log(tablo);

// Accédez aux données d'un tableau et les modifier

var item = tablo[1];
console.log(item);

// tablo[1] = 5;
// console.log(tablo);

// Ajoutez des données au tableau

tablo.push(13);
console.log(tablo);

tablo.push(14);
console.log(tablo);

//Partie 7 : Objets

// La carte de recette

var recette = {
    title: "Môle",
    servings: 2,
    ingredients: ["cannelle", "cumin", "cacao"]

};

console.log(recette.title);
console.log('Pour: ' + recette.servings + ' personnes');
console.log(recette.ingredients[0]);
console.log(recette.ingredients[1]);
console.log(recette.ingredients[2]);

// La liste de lecture

const lecture = [
     livre1 = {
        title: "Le Hobbit",
        author: "JRR Tolkien",
        alreadyRead: false
    },

      livre2 = {
        title: "L'Alchimiste",
        author: "Paulo Cohelo",
        alreadyRead: true
    },

     livre3 = {
        title: "Le philosophe qui n'était pas sage",
        author: "Laurent Gounel",
        alreadyRead: true
    }

];

for (let i=0;i<lecture.length; i++) {

    if (lecture[i].alreadyRead == true) {
            console.log("Vous avez déjà lu \"" + lecture[i].title + "\" de " + lecture[i].author);
    } else { 
        console.log("Vous devez toujours lire \"" + lecture[i].title + "\" de " + lecture[i].author);

    }
}

