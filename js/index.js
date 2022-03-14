let ecran = document.querySelector('.operationOpp')
var myResult = "0", myNumber = "", myOperateur = "";
let virgule = document.querySelector('.point')
let virguleDown = false
let negatif = document.querySelector('.btn_plus_moins')
let negatifDown = false
let operations = document.querySelectorAll('.operation')
const operate = (myOperateur,a,b) => {
    let result = '';
    switch (myOperateur) {
        case '+':
            result = additionner(a,b);
            break;
            case '-':
            result = soustraire(a,b);
            break;
        case '*':
            result = multiplier(a,b);
            break;
        case '/':
            result = diviser(a,b);
            break;
        default:
            result = String(a);
        }
        return result;
}
operations.forEach((operation) => {
    operation.addEventListener('click',() => {
        if(myNumber === ""){
            myOperateur = operation.id;
        }else{
            myResult = operate(myOperateur,parseFloat(myResult),parseFloat(myNumber));
            myOperateur = operation.id;
            myNumber = "";
        }
        virguleDown = false;
        negatifDown = false;
    ecran.innerHTML = myResult + myOperateur + myNumber;
    })
})
let egale = document.querySelector('.egal');
egale.addEventListener('click',() => {
    myResult = operate(myOperateur,parseFloat(myResult),parseFloat(myNumber));
    myNumber = "";
    myOperateur = "";
    virguleDown = true;
    negatifDown = true;
    ecran.innerHTML = myResult + myOperateur + myNumber;
})
ecran.innerHTML = myResult + myOperateur + myNumber;
let clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    myResult = "0";
    myNumber = "";
    myOperateur = "";
    virguleDown = false;
    negatifDown = false;
    ecran.innerHTML = myResult + myOperateur + myNumber;
})
let btnNumbers = document.querySelectorAll('.number');
btnNumbers.forEach((number) => {
    number.addEventListener('click', () => {
        if(myOperateur === ""){
            if(myResult === "0")
                myResult = number.innerHTML;
            else
            myResult += number.innerHTML;
        }
        else{
            if(myNumber === "0")
            myNumber = number.innerHTML;
            else
            myNumber += number.innerHTML;
        }
        ecran.innerHTML = myResult + myOperateur + myNumber;
    })
})
virgule.addEventListener('click',() => {
    if(!virguleDown){
        if(myOperateur === "")
            myResult += ".";
            else
                myNumber += ".";
            virguleDown = true;
            ecran.innerHTML = myResult + myOperateur + myNumber;
        }
    })
    negatif.addEventListener('click',() => {
        if(!negatifDown){
            if(myOperateur === "")
                myResult = '-'+myResult;
            else
                myNumber = '-'+myNumber;
            negatifDown = true;
            ecran.innerHTML = myResult + myOperateur + myNumber;
        }
})
const additionner = (num1, num2) => num1 + num2
const soustraire = (num1, num2) => num1 - num2
const multiplier = (num1, num2) => num1 * num2
const diviser = (num1, num2) => {
    if(num2 == 0)
    return null;
    return num1 / num2;
}