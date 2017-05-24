var numberOne, numberTwo, sign = "";


//Input field (blocked for input from keyboard)
var disp = document.getElementById('text');
disp.onkeypress = function() {
	return false;
}

//Function for input numbers
function inputNumber(number) {
        disp.value = disp.value + number;
}



//Button 1
var buttonOne = document.forms.calc.one;
buttonOne.onclick = function() {
    inputNumber(1);
}


//Button 2
var buttonTwo = document.forms.calc.two;
buttonTwo.onclick = function() {
    inputNumber(2);
}

//Button 3
var buttonThree = document.forms.calc.three;
buttonThree.onclick = function() {
    inputNumber(3);
}

//Button 4
var buttonFour = document.forms.calc.four;
buttonFour.onclick = function() {
    inputNumber(4);
}

//Button5
var buttonFive = document.forms.calc.five;
buttonFive.onclick = function() {
    inputNumber(5);
}

//Button 6
var buttonSix = document.forms.calc.six;
buttonSix.onclick = function() {
    inputNumber(6);
}

//Button 7
var buttonSeven = document.forms.calc.seven;
buttonSeven.onclick = function() {
    inputNumber(7);
}

//Button 8
var buttonEight = document.forms.calc.eight;
buttonEight.onclick = function() {
    inputNumber(8);
}

//Button 9
var buttonNine = document.forms.calc.nine;
buttonNine.onclick = function() {
    inputNumber(9);
}

//Button 0
var buttonZero= document.forms.calc.zero;
buttonZero.onclick = function() {
	 if(zero()) inputNumber(0);
}


function zero(){
	if(disp.value == "0")
		return false;
	return true;
}


//Button Equally
var buttonEqually= document.forms.calc.equally;
buttonEqually.onclick =  function() {
	calcSettings("=");
}

//
//Button Dot
var buttonDot = document.forms.calc.dot;
buttonDot.onclick = function() {
	if(point())inputNumber(".");
}

function point(){
		if(disp.value.indexOf(".") != -1 || disp.value == "" ) return false;
	else return true;
}




//
//Button Minus
var buttonMinus = document.forms.calc.minus;
buttonMinus.onclick = function() {
	calcSettings("-");
}
//Button Plus
var buttonPlus= document.forms.calc.plus;
buttonPlus.onclick = function() {
	calcSettings("+");
}
//
//Button Multiplication
var buttonMultiplication= document.forms.calc.multiplication;
buttonMultiplication.onclick = function() {
	calcSettings("*");
}
//Button Divide
var buttonDivide= document.forms.calc.divide;
buttonDivide.onclick = function() {
	calcSettings("/");
}
//Button Clear
var buttonClear = document.forms.calc.clear;
buttonClear.onclick = clear;


function clear() {
    disp.value = "";
}
//
//
//Button PlusMinus
var buttonPlusMinus = document.forms.calc.plusMinus;
buttonPlusMinus.onclick = plusMinus;

function plusMinus() {
    disp.value = disp.value * (-1);
}


function calcSettings(sn){
    if(sign == "")
        numberOne = disp.value;
    else if(sn == "="){
        numberTwo = disp.value;
        switch(sign){
            case '-': 
                numberOne -= numberTwo;
                break;
            case '+': 
                numberOne = +numberOne + +numberTwo;
                break;
            case '*': 
                numberOne *= numberTwo;
                break;
            case '/': 
                if(numberTwo == 0) {
                    alert("Division by 0 is impossible!");
                    return 0;
                }
                else numberOne /= numberTwo;
                break;
                   }
        disp.value = numberOne;
    }
    switch(sn){
        case '-': 
            sign = "-";
            break;
        case '+': 
            sign = "+";
            break;
        case '*': 
            sign = "*";
            break;
        case '/': 
            sign = "/";
            break;
        case '=': 
            sign = "";
            break;
             }
    if(sn!='=')clear();
    }





 
