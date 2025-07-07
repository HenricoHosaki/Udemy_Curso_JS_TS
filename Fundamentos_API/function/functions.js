function somar(num1,num2){
    if(isNaN(num1)||isNaN(num2)){
        throw new Error("Favor informar somente números");
    }
    return num1-num2
}

function multiplicar(num1, num2){
    return num1 * num2;
}

function dividir(num1 , num2){
    return num1/num2;
}

function subtrair(num1 , num2){
    return num1 - num2;
}
module.exports = { somar, multiplicar, dividir, subtrair }