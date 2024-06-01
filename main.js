


const dictionary = {
    " " : " ",
    "." : ".",
    "," : ",",
    ";" : ";",
    ":" : ":",
    "!" : "!",
    "¡" : "¡",
    "?" : "?",
    "¿" : "¿",
    "(" : "(",
    ")" : ")",
    "-" : "-",
    "+" : "+",
    "=" : "=",
    "*" : "*",
    "/" : "/",
    "%" : "%",
    "$" : "$",
    "#" : "#",
    "@" : "@",
    "a" : "4",
    "b" : "i",
    "c" : "g",
    "d" : "h",
    "e" : "2",
    "f" : "c",
    "g" : "q",
    "h" : "n",
    "i" : "ñ",
    "j" : "l",
    "k" : "é",
    "l" : "7",
    "m" : "v",
    "n" : "3",
    "ñ" : "k",
    "o" : "b",
    "p" : "u",
    "q" : "z",
    "r" : "t",
    "s" : "a",
    "t" : "p",
    "u" : "í",
    "v" : "x",
    "w" : "8",
    "x" : "0",
    "y" : "s",
    "z" : "m",
    "á" : "ó",
    "é" : "e",
    "í" : "ú",
    "ó" : "r",
    "ú" : "á",
    "0" : "w",
    "1" : "o",
    "2" : "6",
    "3" : "j",
    "4" : "y",
    "5" : "9",
    "6" : "d",
    "7" : "f",
    "8" : "1",
    "9" : "5"
};

const antidictionary = {
    " " : " ",
    "." : ".",
    "," : ",",
    ";" : ";",
    ":" : ":",
    "!" : "!",
    "¡" : "¡",
    "?" : "?",
    "¿" : "¿",
    "(" : "(",
    ")" : ")",
    "-" : "-",
    "+" : "+",
    "=" : "=",
    "*" : "*",
    "/" : "/",
    "%" : "%",
    "$" : "$",
    "#" : "#",
    "@" : "@",
    "4" : "a",
    "i" : "b",
    "g" : "c",
    "h" : "d",
    "2" : "e",
    "c" : "f",
    "q" : "g",
    "n" : "h",
    "ñ" : "i",
    "l" : "j",
    "é" : "k",
    "7" : "l",
    "v" : "m",
    "3" : "n",
    "k" : "ñ",
    "b" : "o",
    "u" : "p",
    "z" : "q",
    "t" : "r",
    "a" : "s",
    "p" : "t",
    "í" : "u",
    "x" : "v",
    "8" : "w",
    "0" : "x",
    "s" : "y",
    "m" : "z",
    "ó" : "á",
    "e" : "é",
    "ú" : "í",
    "r" : "ó",
    "á" : "ú",
    "w" : "0",
    "o" : "1",
    "6" : "2",
    "j" : "3",
    "y" : "4",
    "9" : "5",
    "d" : "6",
    "f" : "7",
    "1" : "8",
    "5" : "9"
}

var space = false;
var currentFunction = codeAll;


function codeAll(){
    let text = document.getElementById('input').value;
    let result = '';

    for (let i = 0; i < text.length; i++){
        let char = text[i];
        let adding;

        if (char == char.toLowerCase()){
            adding = dictionary[char];
        }
        else{
            adding = dictionary[char.toLowerCase()].toUpperCase();
        }

        if (adding == undefined){
            adding = char;
        }
        result += adding;
        
    }
    document.getElementById('output').innerText = result;

}


function decodeAll(){
    let text = document.getElementById('input').value;
    let result = '';

    for (let i = 0; i < text.length; i++){
        let char = text[i];
        let adding;

        if (char == char.toLowerCase()){
            adding = antidictionary[char];
        }
        else{
            adding = antidictionary[char.toLowerCase()].toUpperCase();
        }

        if (adding == undefined){
            adding = char;
        }
        result += adding;
        
    }
    document.getElementById('output').innerText = result;
}


function updateState(){
    let checkbox = document.getElementById('state');
    let title = document.getElementById('title');

    if (checkbox.checked){
        currentFunction = decodeAll;
        title.innerText = 'Decodificar';
    }
    else{
        currentFunction = codeAll;
        title.innerText = 'Codificar';
    }
    

    currentFunction();
}


setInterval(function() {currentFunction();}, 2000);