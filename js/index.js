// DOM
const btns = [...document.querySelectorAll('.btn'), document.querySelector('.tag-x')];
const listCode = btns.map(e=>e.dataset.code);
const operation = document.querySelector('.operation');
const resultat = document.querySelector('.resultat');
// la fonction map prend chaque element de tab et faire qlqc puis return le resultat en un nouveau tab
// const tab = [0, 1, 2, 3, 4]
// const nvTab = tab.map(e =>e.toString()+" toString");
// console.log(tab);
// console.log(nvTab);

document.addEventListener('keydown', e => {
    const value = e.keyCode.toString();
    faireCalcule(value);
});
document.addEventListener('click', e => {
    const value = e.target.dataset.code;
    faireCalcule(value);
});

const faireCalcule = value => {
    if(listCode.includes(value)){
        switch(value){
            case '13':
                const val = eval(operation.textContent);
                operation.textContent = val;
                resultat.textContent = "";
            break;
            case '8':
                let str = operation.textContent;
                let newStr = str.substring(0, str.length - 1);
                operation.textContent = newStr;
                resultat.textContent = "";
                break;
            case '46':
                operation.textContent = "";
                resultat.textContent = "";
                break;
            case '9897':
                operation.textContent += "+(-";
                break;
            case '61':
                operation.textContent += "+";
                break;
            case '9899':
                operation.textContent += "-";
                break;
            case '170':
                operation.textContent += "*";
                break;
            case '58':
                operation.textContent += "/";
                break;
            case '169':
                operation.textContent += ")";
                break;
            case '9898':
                operation.textContent += "(";
                break;
            case '59':
                if(operation.textContent[operation.textContent.length-1] == '.'){
                    break;
                }
                if(operation.textContent == '' || 
                        operation.textContent[operation.textContent.length-1] == '+' || 
                        operation.textContent[operation.textContent.length-1] == '-' || 
                        operation.textContent[operation.textContent.length-1] == '/' || 
                        operation.textContent[operation.textContent.length-1] == '*' ){
                    operation.textContent += "0.";
                    break;
                }
                let strP = lastChaine(operation.textContent,'+');
                let strM = lastChaine(operation.textContent,'-');
                let strF = lastChaine(operation.textContent,'*');
                let strD = lastChaine(operation.textContent,'/');
                
                if(
                    strP.includes('.') || strM.includes('.') ||strF.includes('.') ||strD.includes('.')){
                    break;
                }

                operation.textContent += ".";
                break;
            default:
                let indexCode = listCode.indexOf(value);
                let btn = btns[indexCode];
                operation.textContent += btn.innerHTML;
                // 4
                const myRes = eval(operation.textContent);
                resultat.textContent = myRes;
                
        }
    }
}
let lastChaine = (str, smb) => str.substr(str.lastIndexOf(smb));

window.addEventListener('error', e => {
    alert("erreur dans votre calcule: "+ e.message);
});
