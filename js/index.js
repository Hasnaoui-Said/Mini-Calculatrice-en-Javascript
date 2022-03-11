// DOM
const btns = [...document.querySelectorAll('.btn'), document.querySelector('.tag-x')];
const listCode = btns.map(e=>e.dataset.code);
const operation = document.querySelector('.operation');
const resultat = document.querySelector('.resultat');
let myResult = null, myNumber = null, lastInOperation = '';

document.addEventListener('click', e => {
    const value = e.target.dataset.code;
    faireCalcule(value);
});

const faireCalcule = value => {
    if(listCode.includes(value)){
        switch(value){
            case '13':
                operation.textContent = myResult;
                resultat.textContent = '';
                myNumber = null;
                break;
            case '8':
                let str = operation.textContent;
                let newStr = str.substring(0, str.length - 1);
                operation.textContent = newStr;
                myNumber = myNumber.substring(0, myNumber.length - 1);
                resultat.textContent = "";
                break;
            case '46':
                operation.textContent = "";
                resultat.textContent = "";
                myNumber = null;
                myResult = null;
                break;
            case '9899':
                operation.textContent += "-";
                myResult = myNumber;
                lastInOperation = '-';
                myNumber = null;
                break;
            case '61':
                operation.textContent += "+";
                myResult = myNumber;
                lastInOperation = '+';
                myNumber = null;
                break;
            case '170':
                operation.textContent += "*";
                myResult = myNumber;
                lastInOperation = '*';
                myNumber = null;
                break;
            case '58':
                operation.textContent += "/";
                myResult = myNumber;
                lastInOperation = '/';
                myNumber = null;
                break;
            default:
                let indexCode = listCode.indexOf(value), btn = btns[indexCode];
                if(myNumber == null){
                    myNumber = btn.innerHTML;
                }else{
                    myNumber += btn.innerHTML;
                }
                if(myResult != null){
                    if(lastInOperation === '+')
                        resultat.textContent = addition(parseFloat(myResult), parseFloat(myNumber));
                    if(lastInOperation === '-')
                        resultat.textContent = substratcion(parseFloat(myResult), parseFloat(myNumber));
                    if(lastInOperation === '*')
                        resultat.textContent = muliplay(parseFloat(myResult), parseFloat(myNumber));
                    if(lastInOperation === '/')
                        resultat.textContent = diviser(parseFloat(myResult), parseFloat(myNumber));
                }
                operation.textContent += btn.innerHTML;
                break;
        }
    }
}

addition = (num1, num2) => num1 + num2;
substratcion = (num1, num2) => num1 - num2;
muliplay = (num1, num2) => num1 * num2;
diviser = (num1, num2) => {
    if(num2 == 0){
        alert("erreur dans votre calcule: ");
        return ;
    }
    return num1 + num2;
}

window.addEventListener('error', e => {
    alert("erreur dans votre calcule: " + e.message);
});

// document.addEventListener('keydown', e => {
//     const value = e.keyCode.toString();
//     faireCalcule(value);
// });