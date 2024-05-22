


const dictionary = {
    "a" : "s",
    "b" : "á",
    "c" : "g",
    "d" : "í",
    "e" : "+",
    "f" : "5",
    "g" : "o",
    "h" : "=",
    "i" : "ñ",
    "j" : "ú",
    "k" : "b",
    "l" : "0",
    "m" : "r",
    "n" : "-",
    "ñ" : "m",
    "o" : "!",
    "p" : "6",
    "q" : "1",
    "r" : "k",
    "s" : "w",
    "t" : "8",
    "u" : "4",
    "v" : "7",
    "w" : "e",
    "x" : "l",
    "y" : "%",
    "z" : "ó",
    "á" : "h",
    "é" : "j",
    "í" : "p",
    "ó" : "é",
    "ú" : "q",
    " " : " ",
    "." : "t",
    "," : "$",
    ";" : "n",
    ":" : "(",
    "!" : "a",
    "¡" : "?",
    "?" : "2",
    "¿" : ";",
    "(" : "#",
    ")" : "d",
    "-" : ":",
    "+" : "¿",
    "=" : "c",
    "*" : ".",
    "/" : "z",
    "%" : ",",
    "$" : ")",
    "#" : "i",
    "@" : "/",
    "1" : "¡",
    "2" : "*",
    "3" : "@",
    "4" : "f",
    "5" : "9",
    "6" : "v",
    "7" : "x",
    "8" : "y",
    "9" : "u",
};

var space = false;

function decode(txt){
    var textarea = document.getElementById('input');
    var text = textarea.value;
    var resultTxt = document.getElementById('output')
    var result = resultTxt.innerText;


    if (text.length < result.length){
        result = result.substring(0, text.length);
        document.getElementById('output').innerText = result;

    }else{
        if (text[text.length -1] === ' ') {
            space = true;
        } else {
            if (space) {
                result += ' ';
                space = false;
            }
            result += dictionary[text[text.length -1]];
        }
        document.getElementById('output').innerText = result;
    }
}
